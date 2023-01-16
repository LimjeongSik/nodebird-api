const express = require("express");

const {
    verifyToken,
    apiLimiter,
    corsWhenDomainMatches,
} = require("../middlewares");
const {
    createToken,
    tokenTest,
    getMyPosts,
    getPostsByHashtag,
} = require("../controllers/v2");

const router = express.Router();

router.use(corsWhenDomainMatches);

router.post("/token", apiLimiter, createToken);

router.get("/test", apiLimiter, verifyToken, tokenTest);

router.get("/posts/my", apiLimiter, verifyToken, getMyPosts);

router.get("/posts/hashtag/:title", apiLimiter, verifyToken, getPostsByHashtag);

module.exports = router;
