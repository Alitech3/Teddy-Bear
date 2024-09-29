import User from "../../../Models/user";
import dbConnect from "../../../lib/dbConnect.js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await dbConnect();

  const { name, password, type } = await req.json();
  await User.create({
    name: name,
    password: password,
    type: type,
  });

  return NextResponse.json({ message: `${name} signed up as a ${type}!` });
}
