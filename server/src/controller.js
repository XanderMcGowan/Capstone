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
  let title = req.body.title
  let notes = req.body.notes

  let sql = "insert into entries (title, notes) values (?,?)"
  let params = [title, notes]


  db.query(sql, params, function(err, results){
    if(err){
      console.log("you can't even add a todo", err)
      send.sendStatus(500)

    } else {
      res.sendStatus(204)
    }
  })
};

module.exports = {
  feed,
  register
};