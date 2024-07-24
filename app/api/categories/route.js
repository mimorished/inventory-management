import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const{title, description} = await request.json();
        const category = await db.category.create({
            data:{
                title,
                description
            }
        });
        console.log(category);
        return NextResponse.json(category);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error, message:"failed to create category"
        },{
            status:500
        });
}
    
}
export async function GET(request) {
    try {
        const categories = await db.category.findMany({
             orderBy:{
                createdAt:"desc"
             }
        });
        return NextResponse.json(categories);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error, message:"failed to fetch category"
        },{
            status:500
        });
}
}