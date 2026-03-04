import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "user not exist" }, { status: 400 });
    }
    const validatePass = await bcrypt.compare(password, user.password);
    if (!validatePass) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 },
      );
    }

    const token = await jwt.sign({id:user._id},process.env.SECRET_KEY!,{ expiresIn: "1d" })

    const response = NextResponse.json({
        message:"loggein successfully",
        success:true
    })

    response.cookies.set("token",token,{
        httpOnly:true
    })

    console.log(response.cookies.get("token"))

    return response;

  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    );
  }
}
