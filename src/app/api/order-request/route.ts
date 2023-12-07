import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
//import { hash } from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  const { nomorKamar, SessionId, notes } = await req.json();

  const session = await getServerSession(authOptions);

  // await prisma.user.create({
  //     data: {
  //         id,
  //         username,
  //         password: hashedPassword,
  //         nama,
  //         tanggalLahir,
  //         noTelp,
  //         alamat,
  //         role: "STAFF",
  //     },
  //   });

  const OrderRequestCount = await prisma.orderRequest.count();

  await prisma.orderRequest.create({
    data: {
      orderID: OrderRequestCount + 1,
      session: SessionId,
      petugasKebersihan: "",
      nomorKamar: nomorKamar,
      status: "",
      notes: notes,
    },
  });

  return NextResponse.json({ message: "success" });
}

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

  if (session?.user.Role !== "ADMIN") {
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
