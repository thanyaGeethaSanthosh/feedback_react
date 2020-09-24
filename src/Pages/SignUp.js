import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputText, Submit } from './../components/Form';

const SignUp = (props) => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');

  const onSubmit = async () => {
    const formData = { userName, fullName };
    const registered = await props.fetchAPI.Register(formData);
    console.log(registered);
    history.push('/');
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
