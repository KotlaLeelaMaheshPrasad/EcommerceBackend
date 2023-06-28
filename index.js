const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userDetailsRoutes = require("./routes/userDetailsRoutes");
dotenv.config();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN }));
app.use("/", authRoutes);
app.use("/products", productRoutes);
app.use("/userDetails", userDetailsRoutes);

const uri = process.env.MONGO_URI;
mongoose.connect(uri, () => {
  console.log("Database Started");
});



app.get("/", async (request, response) => {
  response.status(200);
  response.send("Welcome to FashionFit server,Enjoy our Services");
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});

module.exports = app;
