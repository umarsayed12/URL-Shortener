const express = require("express");
const urlRoute = require("./routes/url");
const { connectDB } = require("./database");
const URL = require("./models/url");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGODB_URL).then(() =>
  console.log("Database Connected Successfully")
);
app.use(express.json());
app.use("/url", urlRoute);
app.get("/:id", async (req, res) => {
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
});
app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
