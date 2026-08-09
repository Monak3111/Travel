import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hotels } from "@/app/data/hotels";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const userId = String(body?.userId ?? "").trim();

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

    const guests = Number(body?.guests ?? 1);
    const rooms = Number(body?.rooms ?? 1);
    const total = Number(body?.total ?? 0);

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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User account was not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (hotelId === null && destinationId === null) {
      return NextResponse.json(
        {
          message:
            "Please select a hotel or destination.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      hotelId !== null &&
      (!Number.isInteger(hotelId) || hotelId < 1)
    ) {
      return NextResponse.json(
        {
          message: "Invalid hotel ID.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      destinationId !== null &&
      (!Number.isInteger(destinationId) ||
        destinationId < 1)
    ) {
      return NextResponse.json(
        {
          message: "Invalid destination ID.",
        },
        {
          status: 400,
        }
      );
    }

    if (!checkInValue || !checkOutValue) {
      return NextResponse.json(
        {
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
      Number.isNaN(checkIn.getTime()) ||
      Number.isNaN(checkOut.getTime())
    ) {
      return NextResponse.json(
        {
          message: "Invalid booking dates.",
        },
        {
          status: 400,
        }
      );
    }

    if (checkOut <= checkIn) {
      return NextResponse.json(
        {
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
          message: "Rooms must be at least 1.",
        },
        {
          status: 400,
        }
      );
    }

    if (!Number.isFinite(total) || total < 0) {
      return NextResponse.json(
        {
          message: "Invalid booking total.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * =====================================================
     * HOTEL
     * =====================================================
     *
     * The frontend uses hotels from:
     *
     * app/data/hotels.ts
     *
     * Some of those hotels may not yet exist inside
     * the Prisma database.
     *
     * If the hotel exists -> use it.
     *
     * If it does not exist -> find it in hotels.ts and
     * create it automatically in Prisma.
     *
     * IMPORTANT:
     * We do NOT send destinationId to hotel.create().
     */

    if (hotelId !== null) {
      let databaseHotel =
        await prisma.hotel.findUnique({
          where: {
            id: hotelId,
          },
        });

      if (!databaseHotel) {
        const selectedHotel = hotels.find(
          (item) =>
            Number(item.id) === hotelId
        );

        if (!selectedHotel) {
          return NextResponse.json(
            {
              message:
                `Hotel with ID ${hotelId} was not found in app/data/hotels.ts.`,
            },
            {
              status: 404,
            }
          );
        }

        databaseHotel =
          await prisma.hotel.create({
            data: {
              id: Number(selectedHotel.id),

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

      console.log(
        "BOOKING HOTEL:",
        databaseHotel.id,
        databaseHotel.name
      );
    }

    /*
     * =====================================================
     * DESTINATION
     * =====================================================
     *
     * Destination bookings still require the destination
     * to exist in Prisma.
     */

    if (destinationId !== null) {
      const databaseDestination =
        await prisma.destination.findUnique({
          where: {
            id: destinationId,
          },
        });

      if (!databaseDestination) {
        return NextResponse.json(
          {
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
     * =====================================================
     * CREATE BOOKING
     * =====================================================
     *
     * IMPORTANT:
     * Only fields that actually exist in the Prisma
     * Booking model are sent here.
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

    console.log(
      "BOOKING CREATED:",
      booking.id
    );

    return NextResponse.json(
      {
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
        message:
          "Unable to create booking.",

        error:
          error instanceof Error
            ? error.message
            : "Unknown booking error.",
      },
      {
        status: 500,
      }
    );
  }
}