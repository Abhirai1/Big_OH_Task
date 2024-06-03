// server.js
const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

const app = express();
app.use(bodyParser.json());

// Define the User model
const User = require("./models/user")(sequelize, DataTypes);

// Sync the database
sequelize.sync();

// Route to create a form
app.post("/form", async (req, res) => {
  try {
    const { uniqueId, title, name, email, phoneNumber, isGraduate } = req.body;
    const user = await User.create({
      uniqueId,
      title,
      name,
      email,
      phoneNumber,
      isGraduate,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to fill data
app.post("/fill_data", async (req, res) => {
  const formTitle = req.query.form_title;
  if (formTitle === "user") {
    try {
      const { uniqueId, title, name, email, phoneNumber, isGraduate } =
        req.body;
      const user = await User.create({
        uniqueId,
        title,
        name,
        email,
        phoneNumber,
        isGraduate,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Invalid form title" });
  }
});

// Route to get all data
app.get("/fill_data", async (req, res) => {
  const formTitle = req.query.form_title;
  if (formTitle === "user") {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Invalid form title" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
