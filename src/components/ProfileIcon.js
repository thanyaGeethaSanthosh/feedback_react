import React from 'react';

const ProfileIcon = (props) => {
  return (
    <div>
      <img
        className={`${props.className} circle`}
        src={props.src}
        alt='profile'
      />
    </div>
  );
};

export default ProfileIcon;
