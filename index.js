const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const keys = require("./config/keys");
//require("./models/Color");

//connect to DB
mongoose.connect(keys.mongoURI);
//initialize app
const app = express();

app.use(bodyParser.json());

//require("./routes/colorRoutes")(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000; //use heroku variable in production, 5000 in dev
app.listen(PORT);
