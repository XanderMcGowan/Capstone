let db = require("./db");

let argon = require("argon2");

let jwt = require("jsonwebtoken")

let feed = function (req, res) {
  let sql = "select id, user, country, content from tweets";

  db.query(sql, function(err, results){
    if(err){
        console.log("tweet not found", err)
        res.sendStatus(500)
    } else {
        res.json(results)
    }
  });
};

let login= function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  let sql = "select username, hash from users where username = ?";
  let params = [username];

  db.query(sql, params, async function (err, results) {
    let storedHash;

    if (err) {
      console.log("Failed to fetch hash for user", err);
    } else if (results.length > 1) {
      console.log("error", username);
    } else if (results.length == 1) {
      storedHash = results[0].hash;
    }

    try {
      let pass = await argon.verify(storedHash, password);
      if (pass) {
        res.sendStatus(204);
        let token = {
          id: results[0].id,
          username: username
        }
        let signedToken = jwt.sign(token, process.env.JWT_SECRET, {expiresIn:86400})

        res.json(signedToken)
      } 
      else {
        res.status(401);
      }
    } 
    catch (err) {
      console.log("failed to verify hash", err);
      res.status(401);
      return;
    }
  });
};


let register = async function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  if (!username) {
    res.status(400).json("username is required");
    return;
  }

  let hash;
  try {
    hash = await argon.hash(password);
  } catch (err) {
    console.log("Failed to has the password");
    res.status(500);
    return;
  }

  let sql = "insert into users (username, hash) values (?,?)";
  let params = [username, hash];

  db.query(sql, params, function (err, results) {
    if (err) {
      console.log("Failed", err);
    } else {
      res.status(204);
    }
  });
};

module.exports = {
  feed,
  register,
  login
};