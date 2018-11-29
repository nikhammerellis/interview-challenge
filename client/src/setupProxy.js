const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
};

//was in package.json, doesnt play nice with react-scripts versions >= 2
// "proxy": {
//   "/api/*": {
//     "target": "http://localhost:5000"
//   }
// },
