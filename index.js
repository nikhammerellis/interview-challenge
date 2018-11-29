const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const keys = require("./config/keys");
require("./models/Color");

//connect to DB
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
//initialize app
const app = express();

app.use(bodyParser.json());

require("./routes/colorRoutes")(app);

//run this code in production, connects React App to Express.
if (process.env.NODE_ENV === "production") {
  //express will serve up production assets
  app.use(express.static("client/build"));
  //express will serve up the index.html file if it doesn't recognize the route
  //if the route isnt found in the server route files
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; //use heroku variable in production, 5000 in dev
app.listen(PORT);
