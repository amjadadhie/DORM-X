import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//mendapatkan data penghuni berdasarkan idx
export async function GET(req: any) {
  const { penghuniID } = req.json();
  const session = await getServerSession(authOptions);

  // route protection
  if (!session?.user) {
    return NextResponse.json(
      {
        message: "Minimal jangan shortcut-shortcut la",
      },
      { status: 401 }
    );
  }
  // end of route protection
  const id = session?.user?.id;
  console.log(id);

  const penghuniByID = await prisma.user.findUnique({
    where: {
      userID: penghuniID,
      // role: "PENGHUNI"
    },
    select: {
      userID: true,
      nama: true,
      nomorKamar: true,
      tagihan: true,
    },
  });

  return NextResponse.json({ penghuniByID });
}
