import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// getting packageInfo based on packageInfo.staffPengiriman ===

export async function GET() {
  const session = await getServerSession(authOptions);

  // route protection
  if (!session?.user) {
    return NextResponse.json(
      {
        message: "Silahkan login terlebih dahulu",
      },
      { status: 401 }
    );
  }
  const role = session?.user?.role;

  return NextResponse.json(role);
}
