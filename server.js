const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apirouter = require("./routes/api-routes")
const htmlrouter = require("./routes/html-routes")

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apirouter);
app.use(htmlrouter);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  //'App is running on ' + PORT + '!'
});
