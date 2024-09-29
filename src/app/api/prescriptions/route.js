import dbConnect from "../../../lib/dbConnect"; // Path to your MongoDB connection utility
import Prescription from "../../../models/prescription"; // Path to your Prescription model
import { NextResponse } from "next/server";

// GET /api/prescriptions
export async function GET() {
  await dbConnect(); // Connect to the database

  // Fetch all prescriptions
  const prescriptions = await Prescription.find({});

  // Return the prescriptions in the response
  return NextResponse.json({
    success: true,
    data: prescriptions,
  });
}

export async function POST(req) {
  await dbConnect(); // Connect to the database

  // Parse the request body as JSON
  const body = await req.json();

  try {
    // Create a new prescription using the Prescription model
    const newPrescription = await Prescription.create(body);

    // Return the newly created prescription in the response
    return NextResponse.json(
      {
        success: true,
        data: newPrescription,
      },
      { status: 201 }
    ); // 201 status for resource creation
  } catch (error) {
    // Handle errors (validation, database issues, etc.)
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    ); // 400 status for bad request
  }
}
