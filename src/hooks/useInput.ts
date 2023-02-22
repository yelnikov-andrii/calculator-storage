import React from 'react';

export const useInput = (defaultValue: number) => {
  const [value, setValue] = React.useState(defaultValue);

  const changeValue = (newValue: number) => {
    setValue(newValue);
  }

  return {
    value,
    onchange: changeValue
  };
}