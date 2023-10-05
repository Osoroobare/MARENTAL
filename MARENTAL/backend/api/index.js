const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const ownersRoute = require("./routes/owners");
const propertiesRoute = require("./routes/properties");

const port = 8800;
dotenv.config();

mongoose.connect("mongodb://localhost:27017/api")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/owners", ownersRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
