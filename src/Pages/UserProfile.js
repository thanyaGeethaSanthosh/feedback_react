import React, { useEffect, useState } from 'react';
import Profile from './../components/Profile';
import { useParams, useHistory } from 'react-router-dom';
import FeedBackForm from './../components/FeedBackForm';

const UserProfile = (props) => {
  const history = useHistory();
  const { userName } = useParams();
  const [user, setUser] = useState({});
  const getUser = () => {
    props.fetchAPI.getOtherUserData(userName).then(({ otherUser }) => {
      otherUser ? setUser(otherUser) : history.push('/');
    });
  };
  useEffect(getUser, []);
  const { userID, fullName, src } = user;
  return (
    <div className='user_page'>
      <div>
        <Profile
          profileURL={'#'}
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
