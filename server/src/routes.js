let express = require("express")

let router = express.Router()

let controller = require("./controller")

// route to get all todos
router.get("/feed", controller.feed)

router.post("/register",controller.register)

module.exports = router;