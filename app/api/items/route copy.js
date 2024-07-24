import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const itemData = await request.json();
    console.log(data);
    const item = await db.item.create({
      data: {
        title: itemData.title,
        categoryId: itemData.categoryId,
        unit,
        unitId,
        brand,
        brandId,
        unitPrice,
        costPrice,
        supplier,
        reorderPo,
        location,
        weight,
        dimensions,
        taxRate,
        notes,
      },
    });

    console.log(item);

    // Return the created item as JSON response
    return NextResponse.json(item);
  } catch (error) {
    console.error("Error creating item:", error);

    // Return an error response with status 500 and error message
    return NextResponse.json(
      {
        error,
        message: "Failed to add the item",
      },
      {
        status: 500,
      }
    );
  }
}
