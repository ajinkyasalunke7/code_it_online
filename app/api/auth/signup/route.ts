import prisma from "@/libs/prismadb";
import { ApiError } from "@/util/ApiError";
import { ApiResponse } from "@/util/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    // const reqBody = await request.json();
    const { name, username, email, password } = await request.json();

    if (
      [name, email, username, password].some(
        (field) => !field || field.trim() === ""
      )
    ) {
      throw new ApiError(400, "Please fill all the fields");
    }
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });

    if (existingUser) {
      return NextResponse.json(
        new ApiResponse(
          201,
          null,
          "User with same email or username already exists"
        )
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    await prisma.user.create({
      data: {
        name: name,
        email: email,
        username: username.toLowerCase(),
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      new ApiResponse(200, null, "Account created successfully")
    );
  } catch (error) {
    console.log("Error: ", error);
    throw new ApiError(500, "Username or email is required", [error]);
  }
}
