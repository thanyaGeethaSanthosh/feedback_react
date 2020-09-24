import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputText, Submit } from './../components/Form';
import backgroundImage from '../icons/backGroundLogoWhite.png';

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
      <div className='middle inline'>
        <img className='large_logo' src={backgroundImage} alt='' />
      </div>
      <div className='middle login_box'>
        <InputText
          className='login_text'
          value={userName}
          placeholder='Type your new userName...'
          handleChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <InputText
          className='login_text'
          value={fullName}
          placeholder='Type your full name...'
          handleChange={(event) => {
            setFullName(event.target.value);
          }}
        />
        {/* <div className='inline'> */}
        <Submit
          className='button loginBtn'
          active={fullName.length > 0}
          onClick={onSubmit}
          value='Signup with Github'
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default SignUp;
