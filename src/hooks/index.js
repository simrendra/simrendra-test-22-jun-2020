import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [error, seterror] = useState(null);

  const handleChange = (e) => {
    const value = (e.target && e.target.value) || e;
    setValue(value);
  };

  const handleReset = () => {
    setValue("");
    seterror(false);
  };

  return {
    value,
    error,
    seterror,
    onChange: handleChange,
    onReset: handleReset,
  };
}
