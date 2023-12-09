import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function PATCH(req: any) {
  const session = await getServerSession(authOptions);

  // Route protection
  if (!session?.user) {
    return NextResponse.json(
      {
        message: "Minimal Login Dulu Lah",
      },
      { status: 401 }
    );
  }

  const {id, password} = await req.json();

  const updatedPenghuni = await prisma.user.update({
    where: {
      userID: id
    },
    data: {
        password : password
    }
  });
  
  return NextResponse.json(updatedPenghuni);
}
