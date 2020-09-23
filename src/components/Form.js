import React from 'react';

const InputText = (props) => {
  return (
    <input type='text' value={props.value} onChange={props.handleChange} />
  );
};

const Submit = (props) => {
  return (
    <button onClick={props.active ? props.onClick : () => {}}>send</button>
  );
};

export { InputText, Submit };
