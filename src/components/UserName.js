import React from 'react';

const UserName = (props) => {
  return (
    <div className='center user_name'>
      <h1 className='pointer' onClick={props.onClick}>
        {props.userID}
      </h1>
      <h2 className='def_pointer'>{props.fullName}</h2>
    </div>
  );
};

export default UserName;
