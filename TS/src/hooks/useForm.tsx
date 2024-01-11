import { useState } from 'react';

const useForm = <T extends Object>(form: T) => {
  const [formState, setFormState] = useState(form);

  const onChange = (value: string, field: keyof T) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  return {
    ...formState,
    formState,
    onChange,
  };
};

export default useForm;
