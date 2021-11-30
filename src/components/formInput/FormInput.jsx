import { useState } from "react";


const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id,...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  console.log(inputProps)

  return (
    <div className="formInput">
      <label className='labelInput'>{label}</label>
      <input className='inputForm'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "prixUnitaire" && 
          setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className='inputError'>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
