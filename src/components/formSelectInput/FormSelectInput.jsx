import { useState } from "react";


const FormSelectInput= (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, data,...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  console.log(inputProps)
  return (
    <div className="formInputSelect">
      <label className='labelInput'>{label}</label>
        <select className='inputSelectForm'
                       {...inputProps}
                       onChange={onChange}
                       onBlur={handleFocus}
                       onFocus={() =>
                        //  inputProps.lenght ===inputProps
                         setFocused(true)
                       }
                       focused={focused.toString()}          
                      >      
                       {data.map((item,index) => ( 
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
      <span className='inputError'>{errorMessage}</span>
    </div>
  );
};

export default FormSelectInput;
