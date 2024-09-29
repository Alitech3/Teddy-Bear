import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
  brand_name: {
    type: String,
    required: true,
  },
  generic_name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  form_of_ingestion: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const Medication =
  mongoose.models.Medication || mongoose.model("Medication", medicationSchema);

module.exports = Medication;
