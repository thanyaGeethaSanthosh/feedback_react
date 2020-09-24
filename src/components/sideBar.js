import React, { useState, useEffect } from 'react';
import ProfileIcon from './ProfileIcon';
import UserName from './UserName';
import blackBar from './../icons/blackBar.png';
import whiteBar from './../icons/whiteBar.png';

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
  const [loggedUser, setLoggedUser] = useState({});

  const getUser = () => {
    props.fetchAPI.getLoggedUser().then((user) => {
      setLoggedUser(user);
    });
  };
  useEffect(getUser, []);
  const { profileURL, userID, fullName, src } = loggedUser;
  const [active, toggleActive] = useState(false);

  if (!active) {
    return <Icon icon={blackBar} toggleActive={toggleActive} />;
  }
  return (
    <div className='side_bar center'>
      <Icon icon={whiteBar} toggleActive={toggleActive} />
      <ProfileIcon src={src} className={'medium_pic top_space'} />
      <UserName profileURL={profileURL} userID={userID} fullName={fullName} />
    </div>
  );
};

export default SideBar;
