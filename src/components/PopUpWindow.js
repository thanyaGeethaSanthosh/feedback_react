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
      className={`pop_up_Screen border ${
        props.active ? 'front_view' : 'back_view'
      } full_width full_height`}
    >
      <div className={`pop_box`}>
        <InputText
          handleChange={handleChange}
          className='small_input_text pop_text'
          placeholder={placeholder}
          value={value}
        />
        <div className='pop_up_buttons'>
          <Submit
            className='pop_button'
            value={buttonName}
            active={active}
            onClick={() => onSubmit(value)}
          />
          <Submit
            className='pop_button'
            value='Cancel'
            active={active}
            onClick={closer}
          />
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PopUpWindow;
