import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const bookings = await prisma.booking.findMany({
      where: {
        userId: userId,
      },
      include: {
        hotel: true,
        destination: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("BOOKING LIST ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to load bookings",
      },
      {
        status: 500,
      }
    );
  }
}