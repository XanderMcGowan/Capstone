let db = require("./db");

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

let register = function (req, res) {
  let username = req.body.username
  let password = req.body.password

  let sql = "insert into users (username, password) values (?,?)"
  let params = [username, password]


  db.query(sql, params, function(err, results){
    if(err){
      console.log("unable to register", err)
      send.sendStatus(500)

    } else {
      console.log("unable to register", err)
      res.sendStatus(204)
    }
  })
};

module.exports = {
  feed,
  register
};