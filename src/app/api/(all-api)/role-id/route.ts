import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//mendapatkan data penghuni berdasarkan idx
export async function GET() {
  //const { penghuniID } = req.json();
  const session = await getServerSession(authOptions);

  // route protection
//   if (!session?.user) {
//     return NextResponse.json(
//       {
//         message: "Minimal jangan shortcut-shortcut la",
//       },
//       { status: 401 }
//     );
//   }
  // end of route protection
  const id = session?.user?.id;

  const roleByID = await prisma.user.findMany({
    where: {
      id
      // role: "PENGHUNI"
    },
    select: {
      role: true,
    },
  });

  return NextResponse.json({ roleByID });
}
