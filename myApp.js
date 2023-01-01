require('dotenv').config()
const e = require('express');
let express = require('express');
let app = express();

console.log("Hello World");

// Request logger
app.use(function (req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
})


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

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      "message": "HELLO JSON"
    })
  } else {
    res.json({
      "message": "Hello json"
    })
  }
});

// Display time
app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({
    "time" : req.time
  })
});

// Example: http://localhost:3000/HelloWorld/echo
app.get('/:word/echo', function (req, res, next) {
  res.json ({
    "echo" : req.params.word
  })
}); 

// Example: http://localhost:3000/name?first=jane&last=doe
app.get('/name', function (req, res, next) {
  res.json({
    "name" : req.query.first + " " + req.query.last
  })
})






























module.exports = app;
