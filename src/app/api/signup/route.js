import User from "../../../Models/user";
import dbConnect from "../../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  const { name, password, type } = await req.json();

  // Check if the user already exists
  const existingUser = await User.findOne({ name });
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists", error: true },
      { status: 400 }
    );
  }

  // Create a new user
  const newUser = new User({
    name,
    password, // In a real application, make sure to hash the password before saving
    type, // 'patient' or 'provider'
  });

  await newUser.save();

  return NextResponse.json({
    message: "User created successfully",
    userType: newUser.type,
  });
}
