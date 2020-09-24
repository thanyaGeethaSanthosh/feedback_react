import React from 'react';

const UserName = (props) => {
  return (
    <div className='center user_name'>
      <h2 onClick={() => props.profileURL}>{props.userID}</h2>
      <h4>{props.fullName}</h4>
    </div>
  );
};

export default UserName;
