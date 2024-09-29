import dbConnect from "../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ message: "The api to access Meddy Databases" });
}
