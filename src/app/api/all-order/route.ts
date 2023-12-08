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
  
    if (session?.user?.role != "ADMIN") {
      return NextResponse.json(
        {
          message: "Anda tidak memiliki akses",
        },
        { status: 401 }
      );
    }
  
    const orderRequest = await prisma.orderRequest.findMany({});
  
    return NextResponse.json(orderRequest);
  }
  