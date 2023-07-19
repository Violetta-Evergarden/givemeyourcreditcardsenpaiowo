const CardOwO = require('../Controllers/PostController')
const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();


const postlimiter = rateLimit({
    windowMs:   15 * 60 * 1000, // 15 minutes
    max: 10000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})




router.use(postlimiter)

router.route("/").post(CardOwO.postCard);

module.exports = router;