import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: NextRequest) {

  try {

    const data = await req.json();

    console.log("BOOKING REQUEST:", data);


    const booking = await prisma.booking.create({

      data: {

        userId: data.userId,

        hotelId: Number(data.hotelId),

        checkIn: new Date(data.checkIn),

        checkOut: new Date(data.checkOut),

        guests: Number(data.guests),

        rooms: Number(data.rooms),

        total: 5000,

        status: "Confirmed"

      },

      include:{
        hotel:true
      }

    });


    console.log("BOOKING SAVED:", booking);


    return NextResponse.json({
      success:true,
      booking
    });


  } catch(error:any){

    console.log("BOOKING ERROR:", error.message);


    return NextResponse.json(
      {
        message:error.message
      },
      {
        status:500
      }
    );

  }

}