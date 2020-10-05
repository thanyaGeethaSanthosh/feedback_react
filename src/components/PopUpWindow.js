import React, { useState } from 'react';
import { Submit, InputText } from './Form';

const PopUpWindow = (props) => {
  const [value, setValue] = useState('');
  const { closer, onSubmit, placeholder, message, active, buttonName } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={`pop_up_Screen ${props.active ? 'front_view' : 'back_view'}`}
    >
      <div className={`pop_box`}>
        <p>{message}</p>
        <InputText
          handleChange={handleChange}
          className='small_input_text pop_text'
          placeholder={placeholder}
          value={value}
        />
        <div>
          <Submit
            value={buttonName}
            active={active}
            onClick={() => onSubmit(value)}
          />
          <Submit value='Cancel' active={active} onClick={closer} />
        </div>
      </div>
    </div>
  );
};

export default PopUpWindow;
