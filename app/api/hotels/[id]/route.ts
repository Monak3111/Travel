import { NextRequest, NextResponse } from "next/server";
import { hotels } from "@/app/data/hotels";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const hotelId = Number(id);

    if (!Number.isInteger(hotelId) || hotelId <= 0) {
      return NextResponse.json(
        {
          message: "Invalid hotel ID.",
        },
        {
          status: 400,
        }
      );
    }

    const hotel = hotels.find(
      (item) => Number(item.id) === hotelId
    );

    if (!hotel) {
      return NextResponse.json(
        {
          message: "Hotel not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      hotel: {
        id: Number(hotel.id),
        name: String(
          hotel.name ?? "TravelBlack Hotel"
        ),
        location: String(
          hotel.location ?? "TravelBlack"
        ),
        image: String(
          hotel.image ?? ""
        ),
        price: Number(
          hotel.price ?? 5000
        ),
        rating:
          hotel.rating !== undefined
            ? Number(hotel.rating)
            : undefined,
        destinationId:
          hotel.destinationId !== undefined
            ? Number(hotel.destinationId)
            : undefined,
      },
    });
  } catch (error) {
    console.error(
      "HOTEL API ERROR:",
      error
    );

    return NextResponse.json(
      {
        message: "Unable to load hotel.",
      },
      {
        status: 500,
      }
    );
  }
}