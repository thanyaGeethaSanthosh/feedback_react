import React, { useState } from 'react';
import { InputText, Submit } from '../Form';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');

  const onSubmit = () => {
    const formData = { userName, fullName };
    props.fetchAPI.Register(formData);
  };

  return (
    <div>
      <InputText
        value={userName}
        handleChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <InputText
        value={fullName}
        handleChange={(event) => {
          setFullName(event.target.value);
        }}
      />
      <Submit active={fullName.length > 0} onClick={onSubmit} />
    </div>
  );
};

export default SignUp;
