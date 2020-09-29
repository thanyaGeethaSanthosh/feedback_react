import React, { useState, useEffect } from 'react';
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
      onClick={props.toggleActive}
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
  const [active, setActive] = useState(false);
  const [list, setList] = useState([]);

  const getGroupsOf = () => {
    props.fetchAPI.getGroupsOf().then(({ groupList }) => {
      setList(groupList);
    });
  };

  useEffect(getGroupsOf, []);
  const toggleActive = () => {
    setActive((active) => !active);
  };

  const redirectTo = (path) => {
    history.push(path);
    toggleActive();
  };

  const logOut = () => {
    props.fetchAPI.logout().then(() => {
      history.push('/login');
    });
  };

  const groupList = list.map(({ name }) => (
    <SideLink value={name} onClick={() => redirectTo(`/group/${name}`)} />
  ));

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
      {groupList}
      <SideLink onClick={logOut} value='Log out' />
    </div>
  );
};

export default SideBar;
