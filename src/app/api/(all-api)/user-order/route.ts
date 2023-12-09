import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
//import { hash } from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET() {
    const session = await getServerSession(authOptions);
  
    if (!session?.user) {
      return NextResponse.json(
        {
          message: "Silahkan login terlebih dahulu",
        },
        { status: 401 }
      );
    }
  
    const user = session?.user?.id;

    const kamar = await prisma.user.findUnique({
      where: {
        id: user,
      },
      })

    const userOrder = await prisma.orderRequest.findMany({
        where:{
           nomorKamar: kamar?.nomorKamar,
        }
    });

    // order not found
    if (!userOrder) {
        return NextResponse.json(
          {
            message: "Order not found",
          },
          { status: 404 }
        );
      }
  
    return NextResponse.json(userOrder);
  }
  