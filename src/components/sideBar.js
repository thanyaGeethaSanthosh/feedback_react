import React, { useState } from 'react';
import ProfileIcon from './ProfileIcon';
import UserName from './UserName';
import blackBar from './icons/blackBar.png';
import whiteBar from './icons/whiteBar.png';

const Icon = (props) => {
  return (
    <img
      className='bar_icon'
      src={props.icon}
      alt='bar'
      onClick={() => {
        props.toggleActive((active) => !active);
      }}
    />
  );
};

const SideBar = (props) => {
  const { profileImage, userID, fullName } = props;
  const [active, toggleActive] = useState(false);

  if (!active) {
    return <Icon icon={blackBar} toggleActive={toggleActive} />;
  }
  return (
    <div className='side_bar center'>
      <Icon icon={whiteBar} toggleActive={toggleActive} />
      <ProfileIcon src={profileImage} className={'medium_pic'} />
      <UserName profileURL='#' userID={userID} fullName={fullName} />
    </div>
  );
};

export default SideBar;
