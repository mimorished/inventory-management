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

export default function CreateItemForm({categories, units, brands, warehouses}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        toast.success('Item Successfully Created')
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
          {/* <SelectInput
            label="Select the Item Category"
            name="categoryId"
            register={register}
            className="w-full"
            options={categories}
          />
  

<SelectInput
            label="Select the Brand"
            name="brandId"
            register={register}
            className="w-full"
            options={brands}
          />

<SelectInput
            label="Select the Unit"
            name="unitId"
            register={register}
            className="w-full"
            options={units}
          /> */}
          <TextAreaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton className="w-full" isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
