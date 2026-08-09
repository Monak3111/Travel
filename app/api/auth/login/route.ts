import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import {
  COOKIE_NAME,
  createAuthToken,
} from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();

    const password = String(
      body?.password ?? ""
    );

    if (!email || !password) {
      return NextResponse.json(
        {
          message:
            "Email and password required",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (!user) {
      return NextResponse.json(
        {
          message:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          message:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const token =
      createAuthToken(user.id);

    const response =
      NextResponse.json(
        {
          message:
            "Login successful",

          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        },
        {
          status: 200,
        }
      );

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error(
      "LOGIN ERROR:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Unable to login.",
      },
      {
        status: 500,
      }
    );
  }
}