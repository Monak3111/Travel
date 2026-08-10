import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
  COOKIE_NAME,
  verifyAuthToken,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest
) {
  try {
    const token =
      request.cookies.get(
        COOKIE_NAME
      )?.value;

    console.log(
      "MY BOOKINGS COOKIE:",
      token
        ? "COOKIE FOUND"
        : "COOKIE MISSING"
    );

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          authenticated: false,
          message:
            "Please log in to view your bookings.",
        },
        {
          status: 401,
        }
      );
    }

    const userId =
      verifyAuthToken(token);

    console.log(
      "MY BOOKINGS USER:",
      userId
        ? userId
        : "TOKEN INVALID"
    );

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          authenticated: false,
          message:
            "Your login session is invalid. Please log in again.",
        },
        {
          status: 401,
        }
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          authenticated: false,
          message:
            "Your account could not be found.",
        },
        {
          status: 404,
        }
      );
    }

    const bookings =
      await prisma.booking.findMany({
        where: {
          userId,
        },

        include: {
          hotel: true,
          destination: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    const formattedBookings =
      bookings.map((booking) => {
        const hotel =
          booking.hotel;

        const destination =
          booking.destination;

        return {
          id: String(
            booking.id
          ),

          userId:
            booking.userId,

          hotelId:
            booking.hotelId,

          destinationId:
            booking.destinationId,

          hotel: hotel
            ? {
                id: hotel.id,
                name: hotel.name,
                location:
                  hotel.location,
                image: hotel.image,
                price: hotel.price,
                rating: hotel.rating,
              }
            : null,

          destination:
            destination
              ? {
                  id: destination.id,
                  name: destination.name,
                  country:
                    destination.country,
                  image:
                    destination.image,
                }
              : null,

          hotelName:
            hotel?.name ??
            destination?.name ??
            "Travel Destination",

          hotelLocation:
            hotel?.location ??
            destination?.country ??
            "TravelBlack",

          hotelImage:
            hotel?.image ??
            destination?.image ??
            "",

          hotelPrice:
            hotel?.price ?? 0,

          hotelRating:
            hotel?.rating ?? 4.5,

          checkIn:
            booking.checkIn,

          checkOut:
            booking.checkOut,

          guests:
            booking.guests,

          rooms:
            booking.rooms,

          total:
            Number(
              booking.total
            ),

          status:
            booking.status,

          createdAt:
            booking.createdAt,
        };
      });

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
        success: false,
        message:
          "Unable to load bookings.",
      },
      {
        status: 500,
      }
    );
  }
}