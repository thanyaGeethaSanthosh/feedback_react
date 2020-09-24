import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './../components/Profile';
import FeedBackForm from './../components/FeedBackForm';

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
    <div className='user_page'>
      <div>
        <Profile
          profileURL={profileURL}
          userID={userID}
          fullName={fullName}
          src={src}
        />
        <div>
          <FeedBackForm
            onSubmit={(data) =>
              props.fetchAPI.addFeedBack({ ...data, recipient: userID })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
