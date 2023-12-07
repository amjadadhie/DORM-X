import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


//mendapatkan data penghuni berdasarkan id
export async function get(req: any) {
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

    const penghuniByID = await prisma.user.findUnique({
        where: {
            ID: req
        },
    });

    return NextResponse.json({penghuniByID});
}