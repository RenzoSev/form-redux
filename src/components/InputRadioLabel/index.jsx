import React from "react";

export default function InputRadioLabel(props) {
  const { radio, handleChangeState } = props;
  const { labelText, name, value  } = radio;
  
  return (
    <label>
      {labelText}
      <input type="radio" name={name} value={value} onChange={handleChangeState}/>
    </label>
  );
}
