import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

const propertySchema = new mongoose.Schema({
  street: String,
  city: String,
  postcode: String,
  tenant: String,
  rent: Number,
  status: String,
});
//I still dont get what does schema do for definning the (what should u you call key vale? string?) does is setting up a fromat for information to be put without it data will not be able allocaeted specifically? d

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
//I under the code above is to register a new user. however, why req.body.email is needed? arent req.body is parse by express(). Does it work both side like I am passing informing into JSON format?

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
// This code here using .post() to upload information from input tofind a specific user emailand comparing the password. But why proces.env.JW_Secrete here? is it there to take the enviorment variable for esting? in compare it comparing the the req.body.password so it means it takes the information from the mongoose? and compare to user input? but there is no .GET() how does it work?

app.get("/api/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//in this respond here is responding with property information is .json() parsing JSON file?

app.post("/api/properties", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Is this adding new property?

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on PORT 5000");
});
