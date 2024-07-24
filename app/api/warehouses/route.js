import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const{title, location,type, description} = await request.json();
        //const warehouse = {title, location,type, description};
        const warehouse = await db.warehouse.create({
            data:{
                title,
                location,
                description,
                warehouseType:type
            }
        });
        console.log(warehouse);
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error, message:"Failed to create warehouse"
        },{
            status:500
        });
}
    
}

export async function GET(request) {
    try {
        const warehouse = await db.warehouse.findMany({
             orderBy:{
                 createdAt:"desc"
             }
        });
        return NextResponse.json(warehouse);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error, message:"Failed to fetch warehouse"
        },{
            status:500
        });
}
}