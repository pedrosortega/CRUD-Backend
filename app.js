require("dotenv").config();                               //enviormemt variables
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();    // initialize express server ---> also allows you to use tools(app.use)
const apiRouter = require("./api");   // Look for a folder called api in the same directory as the file that is calling this (which is app.js). if api exist auto go to index.js  = api/index.js
const { db } = require("./database");
const cors = require("cors");
//-----------------------------------------------------------------------------------
const PORT = process.env.PORT || 8080;

// body parser middleware
app.use(express.json());

app.use(cors()); // allow all origins

app.use(morgan("dev")); // logging middleware
app.use(express.static(path.join(__dirname, "public"))); // serve static files from public folder
app.use("/api", apiRouter); // mount apiRouter  ---> any route that starts with '/api', use this apiRouter to figure out what to do next

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const runApp = async () => {
  try {
    await db.sync();
    console.log("✅ Connected to the database");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Unable to connect to the database:", err);
  }
};

runApp();

module.exports = app;
