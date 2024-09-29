import Student from "../../Models/student";
import dbConnect from "../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  // Example code to create a new Student
  const [name, password] = ["awdwad", "awdwd"];
  const person = new Student({
    name: "name",
    studentId: "awdgfghhppppp",
  });
  await person.save();
  console.log("person saved");

  return NextResponse.json({ done: true });
}
