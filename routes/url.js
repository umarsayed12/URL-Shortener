const express = require("express");
const {
  generateShortUrl,
  getAnalytics,
  getRedirectedURL,
} = require("../controllers/url");
const router = express.Router();

router.post("/", generateShortUrl);
router.get("/:id", getRedirectedURL);
router.get("/analytics/:id", getAnalytics);

module.exports = router;
