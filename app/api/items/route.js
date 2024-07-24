import db from "@/lib/db";
import { parse } from "next/dist/build/swc";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    const item = await db.item.create({
      data: {
    title: itemData.title,
    categoryId: itemData.categoryId,
    sku: itemData.sku,
    barcode: itemData.barcode,
    quantity: parseInt(itemData.qty),
    unitId: itemData.unitId,
    brandId: itemData.brandId,
    supplierId: itemData.supplierId,
    buyingPrice: parseFloat(itemData.buyingPrice),
    sellingPrice: parseFloat(itemData.sellingPrice),
    reOrderPoint: parseInt(itemData.reOrderPoint),
    warehouseId: itemData.warehouseId,
    weight: parseFloat(itemData.weight),
    dimensions: itemData.dimensions,
    taxRate: parseFloat(itemData.taxRate),
    description: itemData.description,
    notes: itemData.notes,
      }
    })
    // const warehouse = await db.warehouse.create({
    //     data:{
    //         title,
    //         location,
    //         warehouseType:type,
    //         description
    //     }
    // });
    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to create item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
      const items = await db.item.findMany({
           orderBy:{
              createdAt:"desc"
           },
           include:{
            category:true,
           }
      });
      return NextResponse.json(items);
      
  } catch (error) {
      console.log(error);
      return NextResponse.json({
          error, message:"Failed to fetch items"
      },{
          status:500
      });
}
}