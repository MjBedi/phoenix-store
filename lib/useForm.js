import { useEffect, useState } from 'react';

const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  // Found Better Fix:

  // Converts InitialState -> ArrayOfValues -> StringOfValues
  const initialValue = Object.values(initialState).join('');
  // Check/Work-Around for the Loading State
  // ----useEffect----

  useEffect(() => {
    setInputs(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  const handleChange = (e) => {
    let { name, value, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initialState);
  };

  const clearForm = () => {
    const blankSlate = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );
    setInputs(blankSlate);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};

export default useForm;
