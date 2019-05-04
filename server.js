const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
// Define middleware here                     
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

// Send every request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/login", (req, res) => {
 res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/mainpage", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/addPatient", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/addRx", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/info", (req, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/signout", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

}

// Requiring our models for syncing
var db = require("./models");

//	Import Passport Strategies & Config
require("./config/jwtConfig");
require("./config/passport");

app.use(passport.initialize())
app.use(passport.session())

// Add routes, both API and view
require("./routes/Rx")(app);
require("./routes/Patient")(app);
require("./routes/User")(app);
require("./routes/auth")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> App listening on port ${PORT}!`);
  });
});
