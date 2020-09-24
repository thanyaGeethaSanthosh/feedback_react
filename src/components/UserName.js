import React from 'react';

const UserName = (props) => {
  return (
    <div className='center user_name'>
      <h1 onClick={() => props.profileURL}>{props.userID}</h1>
      <h2>{props.fullName}</h2>
    </div>
  );
};

export default UserName;
