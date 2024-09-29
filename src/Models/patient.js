import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    id: {
      type: String, // You can customize the type of id here
      unique: true,
    },
    first_name: {
      type: String,
      required: true,
      unique: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true, // Assuming this is the primary image
    },
    additional_image: {
      type: String, // Optional secondary image
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    home_address: {
      type: String,
      required: true,
    },
    diagnoses: {
      type: [String], // Array of diagnoses
      default: [],
    },
    allergies: {
      type: [String], // Array of allergies
      default: [],
    },
    treat_notes: {
      type: String,
    },
    visit_history: {
      type: Number, // Reference to the visit history, assuming it's in another collection
      required: true,
    },
    prescriptions: {
      type: [String], // List of prescription IDs or names
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Patient ||
  mongoose.model("Patient", patientSchema);
