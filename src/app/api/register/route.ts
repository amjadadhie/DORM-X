import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  const { username, password, nama } = await req.json();

  const session = await getServerSession(authOptions);

  const hashedPassword = await hash(password, 12);

  const userCount = await prisma.user.count();
  const userNew = userCount + 1;

  await prisma.user.create({
    data: {
      userID: userNew,
      username: username,
      password: hashedPassword,
      role: "PENGHUNI",
      nama: nama,
      nomorKamar: "",
      tagihan: 0,
    },
  });

  return NextResponse.json({ message: "success" });
}
