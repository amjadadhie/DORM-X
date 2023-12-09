import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  const { SessionId, notes } = await req.json();

  const session = await getServerSession(authOptions);
  const nomorKamar = session?.user?.nomorKamar;
  const tagihan = session?.user?.tagihan;

  const OrderRequestCount = await prisma.orderRequest.count();

  await prisma.orderRequest.create({
    data: {
      orderID: OrderRequestCount + 1,
      session: SessionId,
      petugasKebersihan: "",
      nomorKamar: nomorKamar,
      status: "Requested",
      notes: notes,
    },
  });

  await prisma.user.update({
    where: {
      id: session?.user?.id,
      nomorKamar: nomorKamar,
    },
    data: {
      tagihan: tagihan+10000,
    },
  })

  return NextResponse.json({ message: "success" });
}
