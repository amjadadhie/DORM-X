import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


//mendapatkan data penghuni berdasarkan idx
export async function GET(req: any) {
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

    const tagihanByID = await prisma.user.findUnique({
        where: {
            id : req,
            role: "PENGHUNI"
        },
        select:{
            tagihan: true
        }
    });

    return NextResponse.json({tagihanByID});
}


