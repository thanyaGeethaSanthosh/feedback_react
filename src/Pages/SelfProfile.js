import React, { useEffect, useState } from 'react';
import Profile from './../components/Profile';

const SelfProfile = (props) => {
  const [loggedUser, setLoggedUser] = useState({});

  const getUser = () => {
    props.fetchAPI.getLoggedUser().then((user) => {
      setLoggedUser(user);
    });
  };
  useEffect(getUser, []);
  const { profileURL, userID, fullName, src } = loggedUser;
  return (
    <div>
      <Profile
        profileURL={profileURL}
        userID={userID}
        fullName={fullName}
        src={src}
      />
      <div>FeedBacks</div>
    </div>
  );
};

export default SelfProfile;
