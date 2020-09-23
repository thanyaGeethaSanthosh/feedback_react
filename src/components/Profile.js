import React from 'react';
import ProfileIcon from './ProfileIcon';
import UserName from './UserName';

const Profile = (props) => {
  return (
    <div className='inline'>
      <ProfileIcon className='medium_pic' src={props.src} />
      <UserName
        profileURL={props.profileURL}
        userID={props.userID}
        fullName={props.fullName}
      />
    </div>
  );
};

export default Profile;
