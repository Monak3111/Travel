
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        {
          message: "User ID is required.",
        },
        {
          status: 400,
        }
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

    const formattedBookings = [];

    for (const booking of bookings) {
      const hotel = booking.hotel;
      const destination = booking.destination;

      const hotelName =
        hotel?.name ??
        "Travel Destination";

      const hotelLocation =
        hotel?.location ??
        destination?.country ??
        "TravelBlack";

      const hotelImage =
        hotel?.image ??
        destination?.image ??
        "";

      const hotelPrice =
        hotel?.price ?? 0;

      const hotelRating =
        hotel?.rating ?? 4.5;

      formattedBookings.push({
        id: booking.id,

        userId: booking.userId,

        hotelId: booking.hotelId,

        destinationId:
          booking.destinationId,

        hotel: hotel
          ? {
              id: hotel.id,
              name: hotel.name,
              location: hotel.location,
              image: hotel.image,
              price: hotel.price,
              rating: hotel.rating,
            }
          : null,

        destination: destination
          ? {
              id: destination.id,
              name: destination.name,
              country: destination.country,
              image: destination.image,
            }
          : null,

        hotelName: hotelName,

        hotelLocation: hotelLocation,

        hotelImage: hotelImage,

        hotelPrice: hotelPrice,

        hotelRating: hotelRating,

        checkIn: booking.checkIn,

        checkOut: booking.checkOut,

        guests: booking.guests,

        rooms: booking.rooms,

        total: Number(booking.total),

        status: booking.status,

        createdAt: booking.createdAt,
      });
    }

    return NextResponse.json(
      formattedBookings,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "GET BOOKINGS ERROR:",
      error
    );

    return NextResponse.json(
      {
        message: "Unable to load bookings.",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}

