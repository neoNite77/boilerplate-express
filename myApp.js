let express = require('express');
let app = express();

console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Normal usage
// app.use(express.static(__dirname + "/public"));

// Can now serve files in the public directory
// Usage where assests are at the /public route (public directory to public path)
app.use("/public", express.static(__dirname + "/public"));
































module.exports = app;
