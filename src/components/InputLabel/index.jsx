import React from 'react';

export default function InputLabel(props) {
  const { input, handleChangeState } = props;
  const { labelText, name, maxLength } = input;
  
  return (
    <label>
      {labelText}
      <input name={name} maxLength={maxLength} required onChange={handleChangeState}/>
    </label>
  )
};
