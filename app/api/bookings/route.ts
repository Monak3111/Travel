import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(){

  const bookings = await prisma.booking.findMany({
    include:{
      hotel:true
    }
  });


  console.log("ALL BOOKINGS:", bookings);


  return NextResponse.json(bookings);

}