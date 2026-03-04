import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect().then(() => {
  console.log("connected ");
});

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const { userName, email, password } = reqBody;

    const user = await User.findOne({ email: email });

    if (user) {
      return NextResponse.json(
        { message: "user alredy exist" },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    const newuser = User.create({
      userName,
      email,
      password: hasedPassword,
    });

    return NextResponse.json(
      {
        message: "user created successfully",
        success: true,
        newuser,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const data = await User.find();
    console.log(data);
    return NextResponse.json({
      message: "data fetchedsuccessfully",
      success: true,
      data,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    );
  }
}
