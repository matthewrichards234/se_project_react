import { useForm } from "react-hook-form";

export function useForm(defaultValues) {
  const [values, setValues] = useForm(defaultValues);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...value, [name]: value });
  };

  return { values, handleChange, setValues };
}
