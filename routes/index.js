var express = require("express"),
    router  = express.Router();

exports.router = router;

router.get("/", index)

function index(req, res, next) {
    res.render("index")
}
