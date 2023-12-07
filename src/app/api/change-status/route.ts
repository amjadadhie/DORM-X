import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// getting packageInfo based on packageInfo.staffPengiriman === 
export async function PATCH(req: any){
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

    const id = session?.user?.id;

    const { orderID, newStatus } = await req.json();

    
    const updatedOrder = await prisma.orderRequest.update({
        where: {
            orderID,
        },
        data:{
            status: newStatus,
        }
    })

    // error order not found
    if (!updatedOrder) {
        return NextResponse.json(
            {
                message: "Order not found",
            },
            { status: 404 }
        );
    }
    
    return NextResponse.json(updatedOrder);
}
