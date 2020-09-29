import React from 'react';
import ProfileIcon from './ProfileIcon';
import UserName from './UserName';

const UserCard = (props) => {
  const { userID, fullName, src, id, onClick } = props;
  return (
    <div id={id} className='card inline small_card'>
      <ProfileIcon className='small_pic' src={src} />
      <UserName userID={userID} fullName={fullName} onClick={onClick} />
    </div>
  );
};

export default UserCard;
