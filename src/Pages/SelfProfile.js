import React, { useEffect, useState } from 'react';
import Profile from './../components/Profile';
import FeedBacks from '../FeedBacks';

const SelfProfile = (props) => {
  const [loggedUser, setLoggedUser] = useState({});

  const getUser = () => {
    props.fetchAPI.getLoggedUser().then(({ user }) => {
      setLoggedUser(user);
    });
  };

  useEffect(getUser, []);

  const { profileURL, userID, fullName, src } = loggedUser;
  return (
    <div className='user_page'>
      <Profile
        profileURL={profileURL}
        userID={userID}
        fullName={fullName}
        src={src}
      />
      <FeedBacks loggedUser={loggedUser} fetchAPI={props.fetchAPI} />
    </div>
  );
};

export default SelfProfile;
