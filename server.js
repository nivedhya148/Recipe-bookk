
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const recipeRoutes = require("./routes/recipeRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipeRoutes);
app.get("/", (req, res) => {
  res.send("Recipe Book API is running!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
