const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();

const feedRoutes = require("./routes/feed");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

const mongoUrl = process.env.url;
mongoose
  .connect(mongoUrl)
  .then((result) => app.listen(8080))
  .catch((err) => console.log(err));
