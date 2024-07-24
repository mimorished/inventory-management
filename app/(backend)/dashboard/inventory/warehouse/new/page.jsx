"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import InputSelect from "@/components/FormInputs/InputSelect";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewWarehouse() {
  const selectOptions = [
    {
      label: "Main",
      value: "Main"
    },
    {
      label: "Branch",
      value: "Branch"
    }
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
  async function onSubmit(data) {
    console.log(data);
    makePostRequest(setLoading, 'api/warehouses', data, "Warehouse", reset);
  }
  return (
    <div>
      <FormHeader title="New Warehouse" href="/dashboard/inventory" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-col-2 sm:gap-6">
          <InputSelect
            label="Select Warehouse Type"
            name="type"
            register={register}
            className="w-full"
            options={selectOptions}
          />
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}

          />
          <TextAreaInput
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}

          />
        </div>
        <SubmitButton isLoading={loading} title="Warehouse" />
      </form>
    </div>
  );
}
