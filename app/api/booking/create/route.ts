import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hotels } from "@/app/data/hotels";
import {
  COOKIE_NAME,
  verifyAuthToken,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    /*
     * AUTHENTICATION
     *
     * The logged-in user is identified from the
     * secure HTTP-only travelblack-auth cookie.
     *
     * We NEVER trust a userId sent by the browser.
     */
    const authToken = request.cookies.get(
      COOKIE_NAME
    )?.value;

    const userId = verifyAuthToken(authToken);

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Please log in before booking.",
        },
        {
          status: 401,
        }
      );
    }

    /*
     * VERIFY USER
     */
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User account was not found.",
        },
        {
          status: 404,
        }
      );
    }

    const body = await request.json();

    /*
     * HOTEL / DESTINATION
     */
    const hotelId =
      body?.hotelId !== null &&
      body?.hotelId !== undefined &&
      body?.hotelId !== ""
        ? Number(body.hotelId)
        : null;

    const destinationId =
      body?.destinationId !== null &&
      body?.destinationId !== undefined &&
      body?.destinationId !== ""
        ? Number(body.destinationId)
        : null;

    const checkInValue = String(
      body?.checkIn ?? ""
    ).trim();

    const checkOutValue = String(
      body?.checkOut ?? ""
    ).trim();

    const guests = Number(
      body?.guests ?? 1
    );

    const rooms = Number(
      body?.rooms ?? 1
    );

    const total = Number(
      body?.total ?? 0
    );

    /*
     * BASIC VALIDATION
     */
    if (
      hotelId === null &&
      destinationId === null
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please select a hotel or destination.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !checkInValue ||
      !checkOutValue
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Check-in and check-out dates are required.",
        },
        {
          status: 400,
        }
      );
    }

    const checkIn = new Date(
      `${checkInValue}T00:00:00`
    );

    const checkOut = new Date(
      `${checkOutValue}T00:00:00`
    );

    if (
      Number.isNaN(
        checkIn.getTime()
      ) ||
      Number.isNaN(
        checkOut.getTime()
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid booking dates.",
        },
        {
          status: 400,
        }
      );
    }

    if (checkOut <= checkIn) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Check-out date must be after check-in date.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(guests) ||
      guests < 1
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Guests must be at least 1.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(rooms) ||
      rooms < 1
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Rooms must be at least 1.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isFinite(total) ||
      total < 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid booking total.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * HOTEL
     */
    if (hotelId !== null) {
      if (
        !Number.isInteger(hotelId) ||
        hotelId < 1
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid hotel ID.",
          },
          {
            status: 400,
          }
        );
      }

      let databaseHotel =
        await prisma.hotel.findUnique({
          where: {
            id: hotelId,
          },
        });

      if (!databaseHotel) {
        const selectedHotel =
          hotels.find(
            (item) =>
              Number(item.id) ===
              hotelId
          );

        if (!selectedHotel) {
          return NextResponse.json(
            {
              success: false,
              message:
                `Hotel with ID ${hotelId} was not found.`,
            },
            {
              status: 404,
            }
          );
        }

        databaseHotel =
          await prisma.hotel.create({
            data: {
              id: Number(
                selectedHotel.id
              ),
              name: String(
                selectedHotel.name
              ),
              location: String(
                selectedHotel.location ??
                  "TravelBlack"
              ),
              image: String(
                selectedHotel.image ?? ""
              ),
              price: Number(
                selectedHotel.price ?? 0
              ),
              rating: Number(
                selectedHotel.rating ?? 4.5
              ),
            },
          });
      }
    }

    /*
     * DESTINATION
     */
    if (destinationId !== null) {
      if (
        !Number.isInteger(
          destinationId
        ) ||
        destinationId < 1
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Invalid destination ID.",
          },
          {
            status: 400,
          }
        );
      }

      const databaseDestination =
        await prisma.destination.findUnique({
          where: {
            id: destinationId,
          },
        });

      if (!databaseDestination) {
        return NextResponse.json(
          {
            success: false,
            message:
              `Destination with ID ${destinationId} does not exist.`,
          },
          {
            status: 404,
          }
        );
      }
    }

    /*
     * CREATE BOOKING
     */
    const booking =
      await prisma.booking.create({
        data: {
          userId,
          hotelId,
          destinationId,
          checkIn,
          checkOut,
          guests,
          rooms,
          total: Math.round(total),
          status: "Confirmed",
        },
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Booking created successfully.",
        booking,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "CREATE BOOKING ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to create booking.",
      },
      {
        status: 500,
      }
    );
  }
}