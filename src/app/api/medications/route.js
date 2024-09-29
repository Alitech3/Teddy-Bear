import Medication from "../../../Models/medication";
import dbConnect from "../../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const data = await Medication.find({});

  return NextResponse.json({
    results: data,
  });
}
