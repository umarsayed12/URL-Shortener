const express = require("express");
const { connectDB } = require("./database");
const URL = require("./models/url");
const path = require("path");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const userRoute = require("./routes/user");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const { getUserDetailsMiddleware } = require("./middlewares/auth");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
connectDB(process.env.MONGODB_URL).then(() =>
  console.log("Database Connected Successfully")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/", getUserDetailsMiddleware, staticRoute);

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
