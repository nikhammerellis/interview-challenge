const mongoose = require("mongoose");
const Color = require("./models/Color");
const keys = require("./config/keys");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

let colors = [
  {
    colorHex: "#0000ff",
    colorCategory: "blue"
  },
  {
    colorHex: "#ff0000",
    colorCategory: "red"
  },
  {
    colorHex: "#00ff00",
    colorCategory: "green"
  },
  {
    colorHex: "#00cc00",
    colorCategory: "green"
  },
  {
    colorHex: "#009900",
    colorCategory: "green"
  },
  {
    colorHex: "#006600",
    colorCategory: "green"
  },
  {
    colorHex: "#003300",
    colorCategory: "green"
  },
  {
    colorHex: "#006633",
    colorCategory: "green"
  },
  {
    colorHex: "#00ff66",
    colorCategory: "green"
  },
  {
    colorHex: "#66ff66",
    colorCategory: "green"
  },
  {
    colorHex: "#66cc33",
    colorCategory: "green"
  },
  {
    colorHex: "#99ff00",
    colorCategory: "green"
  },
  {
    colorHex: "#66cc66",
    colorCategory: "green"
  },
  {
    colorHex: "#ffcc00",
    colorCategory: "orange"
  },
  {
    colorHex: "#ffff00",
    colorCategory: "yellow"
  },
  {
    colorHex: "#808080",
    colorCategory: "grey"
  },
  {
    colorHex: "#3366CC",
    colorCategory: "blue"
  },
  {
    colorHex: "#ff9900",
    colorCategory: "orange"
  },
  {
    colorHex: "#33ccff",
    colorCategory: "blue"
  },
  {
    colorHex: "#ff6600",
    colorCategory: "orange"
  },
  {
    colorHex: "#0066cc",
    colorCategory: "blue"
  },
  {
    colorHex: "#ff9966",
    colorCategory: "orange"
  },
  {
    colorHex: "#c0c0c0",
    colorCategory: "grey"
  },
  {
    colorHex: "#780000",
    colorCategory: "red"
  },
  {
    colorHex: "#990000",
    colorCategory: "red"
  },
  {
    colorHex: "#cc0000",
    colorCategory: "red"
  },
  {
    colorHex: "#cc0033",
    colorCategory: "red"
  },
  {
    colorHex: "#500000",
    colorCategory: "red"
  },
  {
    colorHex: "#580000",
    colorCategory: "red"
  },
  {
    colorHex: "#600000",
    colorCategory: "red"
  },
  {
    colorHex: "#680000",
    colorCategory: "red"
  },
  {
    colorHex: "#700000",
    colorCategory: "red"
  },
  {
    colorHex: "#e80000",
    colorCategory: "red"
  },
  {
    colorHex: "#a80000",
    colorCategory: "red"
  },
  {
    colorHex: "#c00000",
    colorCategory: "red"
  },
  {
    colorHex: "#d80000",
    colorCategory: "red"
  },
  {
    colorHex: "#e00000",
    colorCategory: "red"
  },
  {
    colorHex: "#800000",
    colorCategory: "red"
  },
  {
    colorHex: "#880000",
    colorCategory: "red"
  },
  {
    colorHex: "#900000",
    colorCategory: "red"
  },
  {
    colorHex: "#ffff33",
    colorCategory: "yellow"
  },
  {
    colorHex: "#ffff66",
    colorCategory: "yellow"
  },
  {
    colorHex: "#ffff99",
    colorCategory: "yellow"
  },
  {
    colorHex: "#ffffcc",
    colorCategory: "yellow"
  },
  {
    colorHex: "#ccff00",
    colorCategory: "yellow"
  },
  {
    colorHex: "#ccff33",
    colorCategory: "yellow"
  },
  {
    colorHex: "#ccff66",
    colorCategory: "yellow"
  },
  {
    colorHex: "#e6e600",
    colorCategory: "yellow"
  },
  {
    colorHex: "#cccc00",
    colorCategory: "yellow"
  },
  {
    colorHex: "#b3b300",
    colorCategory: "yellow"
  },
  {
    colorHex: "#f2e6ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#e6ccff",
    colorCategory: "purple"
  },
  {
    colorHex: "#d9b3ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#cc99ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#bf80ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#b366ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#a64dff",
    colorCategory: "purple"
  },
  {
    colorHex: "#9933ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#f7e6ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#eeccff",
    colorCategory: "purple"
  },
  {
    colorHex: "#e6b3ff",
    colorCategory: "purple"
  },
  {
    colorHex: "#7700b3",
    colorCategory: "purple"
  },
  {
    colorHex: "#550080",
    colorCategory: "purple"
  },
  {
    colorHex: "#33004d",
    colorCategory: "purple"
  },
  {
    colorHex: "#dfbf9f",
    colorCategory: "brown"
  },
  {
    colorHex: "#d9b38c",
    colorCategory: "brown"
  },
  {
    colorHex: "#d2a679",
    colorCategory: "brown"
  },
  {
    colorHex: "#ac7339",
    colorCategory: "brown"
  },
  {
    colorHex: "#996633",
    colorCategory: "brown"
  },
  {
    colorHex: "#86592d",
    colorCategory: "brown"
  },
  {
    colorHex: "#734d26",
    colorCategory: "brown"
  },
  {
    colorHex: "#604020",
    colorCategory: "brown"
  },
  {
    colorHex: "#4d3319",
    colorCategory: "brown"
  },
  {
    colorHex: "#392613",
    colorCategory: "brown"
  },
  {
    colorHex: "#994d00",
    colorCategory: "brown"
  },
  {
    colorHex: "#804000",
    colorCategory: "brown"
  },
  {
    colorHex: "#663300",
    colorCategory: "brown"
  },
  {
    colorHex: "#4d2600",
    colorCategory: "brown"
  },
  {
    colorHex: "#ccffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#b3ffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#99ffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#80ffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#66ffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#4dffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#33ffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#1affff",
    colorCategory: "blue"
  },
  {
    colorHex: "#00ffff",
    colorCategory: "blue"
  },
  {
    colorHex: "#f2f2f2",
    colorCategory: "grey"
  },
  {
    colorHex: "#e6e6e6",
    colorCategory: "grey"
  },
  {
    colorHex: "#d9d9d9",
    colorCategory: "grey"
  },
  {
    colorHex: "#cccccc",
    colorCategory: "grey"
  },
  {
    colorHex: "#bfbfbf",
    colorCategory: "grey"
  },
  {
    colorHex: "#b3b3b3",
    colorCategory: "grey"
  },
  {
    colorHex: "#a6a6a6",
    colorCategory: "grey"
  },
  {
    colorHex: "#999999",
    colorCategory: "grey"
  },
  {
    colorHex: "#737373",
    colorCategory: "grey"
  },
  {
    colorHex: "#666666",
    colorCategory: "grey"
  },
  {
    colorHex: "#333333",
    colorCategory: "grey"
  },
  {
    colorHex: "#ffa64d",
    colorCategory: "orange"
  },
  {
    colorHex: "#ff8c1a",
    colorCategory: "orange"
  }
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

colors = shuffle(colors); //shuffle the colors array before seeding mongodb with it

let count = 1;
for (i = 0; i < colors.length; i++) {
  const newColor = new Color(colors[i]);
  newColor.save(function(err, color) {
    count += 1;
    if (err) {
      console.log("ERROR: ", error);
    } else if (count == colors.length) {
      console.log("ALL COLORS ADDED");
      process.exit();
    } else {
      console.log("COLOR IN DB: ", color);
    }
  });
}
