import React from 'react';
import backgroundImage from '../icons/backGroundLogoWhite.png';

const Login = (props) => {
  return (
    <div>
      <div className='middle inline'>
        <img className='large_logo' src={backgroundImage} alt='' />
      </div>
      <div className='middle'>
        <a href={`${process.env.REACT_APP_SERVER || '/'}api/authenticate`}>
          <button className='button loginBtn'>Login with Github</button>
        </a>
      </div>
    </div>
  );
};
export default Login;
