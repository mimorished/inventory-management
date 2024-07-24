import React from "react";
import TextInput from "./TextInput";

export default function PriceInput({
  label,
  name,
  register,
  errors,
  defaultValue,
}) {
  const validatePriceFormat = (value) => {
    const regex = /^\$?\d+(\.\d{1,2})?$/;
    return (
      regex.test(value) ||
      "Please enter a valid price format (e.g., $10 or $10.50)"
    );
  };
  const formattedDefaultValue = defaultValue ? `$${defaultValue}` : "";
  return (
    <TextInput
      label={label}
      name={name}
      register={register}
      errors={errors}
      type="text"
      defaultValue={formattedDefaultValue}
    />
  );
}
