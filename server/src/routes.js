let express = require("express")

let router = express.Router()

let controller = require("./controller")

let authsMiddleware = require("./middleware")

// route to get all todos
router.get("/feed", authsMiddleware.checkJWT, controller.feed)

router.post("/login", controller.login)

router.post("/register",controller.register)

module.exports = router;