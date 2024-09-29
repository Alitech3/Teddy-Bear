import User from "../../../Models/user";
import dbConnect from "../../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const password = searchParams.get("password");

  const user = await User.findOne({ name });

  if (user && user.password === password) {
    return NextResponse.json({ userType: user.type });
  } else {
    return NextResponse.json(
      { message: "Invalid credentials", error: true },
      { status: 401 }
    );
  }
}
