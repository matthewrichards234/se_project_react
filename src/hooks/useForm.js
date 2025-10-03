import { useState } from "react";

export default function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setValues(defaultValues);
  };

  return { values, handleChange, setValues, resetForm };
}
