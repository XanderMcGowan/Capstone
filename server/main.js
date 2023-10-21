let express = require("express")


let app = express()

require("dotenv").config()

app.use(express.json())

let routes = require("./src/routes")

app.use(routes)

let PORT = process.env.PORT || 3306

app.listen(PORT, function(){
    console.log("TODO app start on port", PORT)
})
