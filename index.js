const express = require("express");
const urlRoute = require("./routes/url");
const { connectDB } = require("./database");
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRoute");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGODB_URL).then(() =>
  console.log("Database Connected Successfully")
);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
