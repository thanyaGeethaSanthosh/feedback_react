import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from './../components/Profile';
import FeedBacks from '../FeedBacks';
import { Submit } from './../components/Form';
import PopUpWindow from '../components/PopUpWindow';

const joinGroup = (groupID, history, fetchAPI) => {
  fetchAPI.joinGroup(groupID).then(({ groupName }) => {
    history.push(`/group/${groupName}`);
  });
};

const SelfProfile = (props) => {
  const history = useHistory();
  const [joinActive, setJoinActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);
  const [message, setMessage] = useState('');
  const [loggedUser, setLoggedUser] = useState({});

  const getUser = () => {
    props.fetchAPI.getUserData().then(({ user }) => {
      setLoggedUser(user);
    });
  };

  const createGroup = (groupName) => {
    props.fetchAPI
      .createGroup(groupName)
      .then(({ groupName, groupID, added }) => {
        setMessage(`Share this id: ${groupID} to join`);
      });
  };

  useEffect(getUser, []);
  const { profileURL, userID, fullName, src } = loggedUser;
  return (
    <div className='user_page'>
      {joinActive ? (
        <PopUpWindow
          closer={() => setJoinActive(false)}
          onSubmit={(id) => joinGroup(id, history, props.fetchAPI)}
          placeholder='Type group ID to join'
          message=''
          active={joinActive}
          buttonName='Join'
        />
      ) : (
        ''
      )}
      {createActive ? (
        <PopUpWindow
          closer={() => setCreateActive(false)}
          onSubmit={createGroup}
          placeholder='Type group Name to create'
          message={message}
          active={createActive}
          buttonName='Create'
        />
      ) : (
        ''
      )}
      <Profile
        profileURL={profileURL}
        userID={userID}
        fullName={fullName}
        src={src}
      />
      <div className='group_buttons'>
        <Submit
          value='Create group'
          active={true}
          onClick={() => setCreateActive(true)}
        />
        <Submit
          value='Join group'
          active={true}
          onClick={() => setJoinActive(true)}
        />
      </div>
      <FeedBacks loggedUser={loggedUser} fetchAPI={props.fetchAPI} />
    </div>
  );
};

export default SelfProfile;
