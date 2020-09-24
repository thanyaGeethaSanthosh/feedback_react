import React from 'react';

const Login = (props) => {
  return (
    <div className='vertical-center full-height'>
      <a href='http://localhost:3030/api/authenticate'>
        <button>Login with Github</button>
      </a>
    </div>
  );
};
export default Login;
