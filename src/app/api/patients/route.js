import Patient from "../../../Models/patient";
import dbConnect from "../../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const data = await Patient.find({});

  return NextResponse.json({
    results: data,
  });
}

export async function POST(req) {
  await dbConnect();

  const body = await req.json();

  // Convert prescriptions to ObjectId if it's a valid ID

  const newPatient = await Patient.create(body); // Create new patient

  return NextResponse.json(
    {
      success: true,
      data: newPatient,
    },
    { status: 201 }
  );
}

export async function PUT(req) {
  await dbConnect();

  const body = await req.json(); // Extract JSON body
  const updatedPatient = await Patient.findOneAndUpdate(
    { first_name: body.first_name },
    body,
    {
      new: true, // Return the updated document
      runValidators: true, // Validate before updating
    }
  );

  return NextResponse.json(
    {
      success: true,
      data: updatedPatient,
    },
    { status: 200 }
  ); // Return 200 for successful update
}
