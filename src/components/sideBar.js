import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import UserName from './UserName';
import blackBar from './../icons/blackBar.png';
import whiteBar from './../icons/whiteBar.png';

const Icon = (props) => {
  return (
    <img
      className='bar_icon pointer'
      src={props.icon}
      alt='bar'
      onClick={() => {
        props.toggleActive((active) => !active);
      }}
    />
  );
};

const SideLink = (props) => {
  return (
    <h1 className='pointer' onClick={props.onClick}>
      {props.value}
    </h1>
  );
};

const SideBar = (props) => {
  const history = useHistory();
  const { userID, fullName, src } = props.user;
  const [active, toggleActive] = useState(false);

  const redirectTo = (path) => {
    history.push(path);
  };

  const logOut = () => {
    props.fetchAPI.logout().then(() => {
      history.push('/login');
    });
  };

  if (!active) {
    return <Icon icon={blackBar} toggleActive={toggleActive} />;
  }
  return (
    <div className='side_bar center'>
      <Icon icon={whiteBar} toggleActive={toggleActive} />
      <ProfileIcon src={src} className={'medium_pic top_space'} />
      <UserName
        onClick={() => redirectTo('/')}
        userID={userID}
        fullName={fullName}
      />
      <SideLink onClick={logOut} value='Log out' />
    </div>
  );
};

export default SideBar;
