import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
//import { hash } from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { UserSession } from "@/components/userFetcher";

export async function GET() {
    const session = await getServerSession(authOptions);
    const user = session?.user as UserSession;
    const nomorKamar = user?.nomorKamar;
  
    if (!session?.user) {
      return NextResponse.json(
        {
          message: "Silahkan login terlebih dahulu",
        },
        { status: 401 }
      );
    }
    
    const orderRequest = await prisma.orderRequest.findMany({
      where: {
        nomorKamar: nomorKamar
      }
    });
  
    return NextResponse.json(orderRequest);
  }
  