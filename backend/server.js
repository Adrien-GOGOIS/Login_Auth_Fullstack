// LIBRAIRIES EXPRESS MONGOOSE
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

// LIBRAIRIES AUTH
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// MIDDLEWARES
app.use(cookieParser());
app.use(express.json());

// CONNEXION DATABASE
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Mongo");
  });

const User = require("./models/userModel");

// ***** ROUTES ***** //

// SIGN UP
app.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  const { email, firstName, surname, dateOfBirth } = req.body;

  try {
    await User.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      surname: surname,
      dateOfBirth: dateOfBirth,
    });
  } catch (err) {
    res.status(400).json({
      message: "User already exist",
    });
  }
  res.status(201).json({
    message: "User created",
  });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const usr = await User.findOne({ email });
  if (!usr) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, usr.password);
  if (!isPasswordValid) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: usr._id }, process.env.SECRET_DB);

  res.cookie("jwtCookie", token, { httpOnly: true, secure: false });

  res.json({
    message: "Auth cookie ready",
  });
});

// ADMIN ACCESS
app.get("/users", (req, res) => {
  let data;

  try {
    data = jwt.verify(req.cookies.jwtCookie, process.env.SECRET_DB);
    console.log("SECRET", process.env.SECRET_DB);
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  console.log(data);

  res.json({
    message: "Ok, requête acceptée",
  });
});

// GET TEST
app.get("/", async (req, res) => {
  const usr = await User.find();
  res.json(usr);
});

// LISTEN
app.get("*", (_req, res) => {
  res.status(404).send("Error 404, cette page n'existe pas");
});

app.listen(8000, () => {
  console.log("LISTENING...");
});
