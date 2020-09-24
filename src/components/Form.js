import React from 'react';

const InputText = (props) => {
  return (
    <input
      className={`input_text avg_width  ${props.className || ''}`}
      type='text'
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  );
};

const TextArea = (props) => {
  return (
    <textarea
      className={`input_text avg_width large_input_text ${
        props.className || ''
      }`}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  );
};

const Submit = (props) => {
  return (
    <button
      className='button side_Button'
      onClick={props.active ? props.onClick : () => {}}
    >
      {props.value ? props.value : 'send'}
    </button>
  );
};

export { InputText, Submit, TextArea };
