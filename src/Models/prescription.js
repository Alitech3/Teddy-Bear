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
    type: String, // You can use String for prices to include currency symbol
    required: true,
  },
  form_of_ingestion: {
    type: String,
    enum: ["pill", "liquid", "injection", "topical", "other"], // Example of form types
    required: true,
  },
});

const prescriptionSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    medications: {
      type: [medicationSchema], // Array of medications following the above schema
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Prescription ||
  mongoose.model("Prescription", prescriptionSchema);
