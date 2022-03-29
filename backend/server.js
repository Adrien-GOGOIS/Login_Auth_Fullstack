// LIBRAIRIES EXPRESS MONGOOSE
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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
  // console.log("REQUETE RECUE");
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  console.log("HASHED", hashedPassword);

  try {
    await User.create({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      surname: req.body.surname,
      dateOfBirth: req.body.dateOfBirth,
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
  console.log("LISTENING ON PORT 8000");
});
