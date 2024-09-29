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
    enum: ["pill", "liquid", "injection", "topical", "other"],
    required: true,
  },
});

const prescriptionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  medications: {
    type: [medicationSchema],
    required: true,
  },
});

const patientSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
      type: [String],
      default: [],
    },
    allergies: {
      type: [String],
      default: [],
    },
    treat_notes: {
      type: String,
    },
    visit_history: {
      type: Number,
      required: true,
    },
    prescriptions: {
      type: [prescriptionSchema], // Array of prescriptions for the patient
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Patient ||
  mongoose.model("Patient", patientSchema);
