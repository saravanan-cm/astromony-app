const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require('cors');
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use(cors({origin: 'http://localhost:3000'}));
app.use("/api/users", users);

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, replicaSet: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
