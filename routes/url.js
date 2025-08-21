const express = require("express");
const {
  generateShortUrl,
  getAnalytics,
  getRedirectedURL,
} = require("../controllers/url");
const { userAuthMiddleware } = require("../middlewares/auth");
const router = express.Router();

router.post("/", userAuthMiddleware, generateShortUrl);
router.get("/:id", getRedirectedURL);
router.get("/analytics/:id", userAuthMiddleware, getAnalytics);

module.exports = router;
