import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
//the bcrypt is an encryption library, but where does it come from and how does it work?

import jwt from "jsonwebtoken";
//the token is for when a user logged in, it useses as a key to access certain information.

dotenv.config();
// this is just enable the environment variable to be executed.

const app = express();
// active express
app.use(express.json());
//it tels express to parse json files?

app.use(cors());
//it tells the backend server to accept any post and reqest from other server?

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: "user" },
});
// this mongoose syntax is a function which act as a component for User variable when ever this variable is called it will create a new file in mongoose, with a format(Schema) like a typescript only accept a specific format.

const User = mongoose.model("User", userSchema);
// this variable has a string within the function then calling another component. Why is there a string at the front? would it be loggin the user name? and what ids model().

const propertySchema = new mongoose.Schema({
  street: String,
  city: String,
  postcode: String,
  tenant: String,
  rent: Number,
  status: String,
});
//same as userSchema function just a typescript checking the format? or actualling creating the format?

const Property = mongoose.model("Property", propertySchema);

app.post("/api/auth/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// app.post & get are functions waiting to be called with the HTTP made the GET & POST request while while matching the URL which represent as a string in the function parameters.  And that URL doesnt needs to be an actually page exist in the WEB. But as a hidden route for express to recongise.
// this register.post is posting something like adding a new user in, but how does it work? is it .save()? and is save() mongoose function? or express?

app.post("/api/auth/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send("Invalid credentials");

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/properties", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on PORT 5000");
});
