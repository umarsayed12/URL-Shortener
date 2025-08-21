const { nanoid } = require("nanoid");
const URL = require("../models/url");
async function generateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortID = nanoid(7);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitAnalytics: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID,
  });
}

async function getRedirectedURL(req, res) {
  const shortId = req.params.id;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitAnalytics: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

async function getAnalytics(req, res) {
  const shortId = req.params.id;
  const analytics = await URL.findOne({ shortId });
  return res
    .status(200)
    .json({ totalClicks: analytics.visitAnalytics.length, analytics });
}

module.exports = { generateShortUrl, getAnalytics, getRedirectedURL };
