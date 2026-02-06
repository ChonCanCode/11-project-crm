import express from "express";
import Property from "../models/Property";

const router = express.Router();

router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

router.post("/", async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.status(201).json(property);
});

module.exports = router;
