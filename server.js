const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get('/login', (req, res) => {
 res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> App listening on port ${PORT}!`);
  });
});
