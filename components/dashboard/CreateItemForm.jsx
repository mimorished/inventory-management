"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { UploadButton } from "@/lib/uploadthing";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { UploadDropzone } from "@uploadthing/react";
import { makePostRequest } from "@/lib/apiRequest";

export default  function CreateItemForm({categories, units, brands, warehouses}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
  async function onSubmit(data) {
    console.log(data);
    makePostRequest(setLoading, 'api/items', data, "Item", reset);

  }
  return (
    
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-col-2 sm:gap-6">
          <TextInput
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="categoryId"
            label="Select the Item Category"
            register={register}
            className="w-full"
            options={categories}
          />
          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            //isRequired={false}
            className="w-full"
          />

          <TextInput
            label="Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            name="unitId"
            label="Select the Item Unit"
            register={register}
            className="w-full"
            options={units}
          />

          <SelectInput
            name="brandId"
            label="Select the Item Brand"
            register={register}
            className="w-full"
            options={brands}
          />

          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInput
            label="Selling Price"
            name="sellingPrice"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />

          {/* <SelectInput
            name="SupplierId"
            label="Select the Item Supplier"
            register={register}
            className="w-full"
            options={suppliers}
          /> */}

          <TextInput
            label="Re-Order Point"
            name="reOrderPoint"
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />

          <SelectInput
            name="warehouseId"
            label="Select the Warehouse"
            register={register}
            className="w-full"
            options={warehouses}
          />

          <TextInput
            label="Item Weight in Kilograms"
            name="weight"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Dimensions in cm (20x30x100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextAreaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />

          <TextAreaInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors}
          />
{/* <div className="col-span-full">
          <div className="flex justify-between items-center mb-4">
            <label
              htmlFor="course-image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Item Image
            </label>
            {imageUrl && (
              <button
                onClick={() => setImageUrl("")}
                type="button"
                className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
              >
                <Pencil className="w-5 h-5" />
                <span>Change Image</span>
              </button>
            )}
          </div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Item image"
              width={1000}
              height={667}
              className="w-full h-64 object-cover"
            />
          ) : (
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImageUrl(res[0].fileUrl);
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}
        </div> */}
        </div>
        <SubmitButton isLoading={loading} title="Items" />
      </form>
    </div>
  );
}
