import React, { useState } from "react";

const useForm = (callback: any, validation: any): any => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event: any) => {
    event.persist();

    let id = event.target.id;
    let val = event.target.value;

    validation(id, val, errors, setErrors);

    setValues({
      ...values,
      [id]: val,
    });
  };

  const handleSubmit = (e: any) => {
    if (e) e.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
