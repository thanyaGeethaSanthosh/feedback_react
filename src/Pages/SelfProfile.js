import React, { useEffect, useState } from 'react';
import Profile from './../components/Profile';
import SingleFeedBack from './../components/SingleFeedBack';

const FeedBackList = (props) => {
  const feebBacks = props.feedBacks.map(
    ({ nameToShow, recipient, relatedTo, suggestion, time, id }) => (
      <SingleFeedBack
        nameToShow={nameToShow}
        recipient={recipient}
        relatedTo={relatedTo}
        suggestion={suggestion}
        time={time}
        id={id}
        key={id}
      />
    )
  );
  return <div>{feebBacks}</div>;
};

const SelfProfile = (props) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [sentFeedBack, setSentFeedBack] = useState([]);
  const [receivedFeedBack, setReceivedFeedBack] = useState([]);

  const getUser = () => {
    props.fetchAPI.getLoggedUser().then((user) => {
      setLoggedUser(user);
    });
  };

  const getSentFeedBack = () => {
    props.fetchAPI.getSentFeedBacks().then((list) => {
      setSentFeedBack(list);
    });
  };

  const getReceivedFeedBack = () => {
    props.fetchAPI.getReceivedFeedBacks().then((list) => {
      setReceivedFeedBack(list);
    });
  };

  useEffect(getUser, []);
  useEffect(getSentFeedBack, []);
  useEffect(getReceivedFeedBack, []);

  const { profileURL, userID, fullName, src } = loggedUser;
  return (
    <div>
      <Profile
        profileURL={profileURL}
        userID={userID}
        fullName={fullName}
        src={src}
      />
      <div>
        <div class='inline'>
          <div>Sent</div>
          <div>Received</div>
        </div>
        <div>
          <FeedBackList feedBacks={receivedFeedBack} />
        </div>
      </div>
    </div>
  );
};

export default SelfProfile;
