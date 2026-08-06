import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      email,
      password
    } = body;


    if(!email || !password){

      return NextResponse.json(
        {
          message:"Email and password required"
        },
        {
          status:400
        }
      );

    }



    const user = await prisma.user.findUnique({

      where:{
        email
      }

    });



    if(!user){

      return NextResponse.json(
        {
          message:"Invalid email or password"
        },
        {
          status:401
        }
      );

    }



    const passwordMatch = await bcrypt.compare(

      password,

      user.password

    );



    if(!passwordMatch){

      return NextResponse.json(
        {
          message:"Invalid email or password"
        },
        {
          status:401
        }
      );

    }



    return NextResponse.json({

      message:"Login successful",

      user:{
        id:user.id,
        name:user.name,
        email:user.email
      }

    });



  } catch (error) {
  console.error(error);

  return NextResponse.json(
    {
      message: String(error)
    },
    {
      status: 500
    }
  );
}

}