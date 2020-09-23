import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './../Profile';
import FeedBackForm from './../FeedBackForm';

const UserProfile = (props) => {
  const { userName } = useParams();
  const [user, setUser] = useState({});

  const getUser = () => {
    props.fetchAPI.getUser(userName).then((user) => {
      setUser(user);
    });
  };
  useEffect(getUser, []);
  const { profileURL, userID, fullName, src } = user;
  return (
    <div>
      <div>
        <Profile
          profileURL={profileURL}
          userID={userID}
          fullName={fullName}
          src={src}
        />
        <div>
          <FeedBackForm onSubmit={(data) => props.fetchAPI.addFeedBack(data)} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
