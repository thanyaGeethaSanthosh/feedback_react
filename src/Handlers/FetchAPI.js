const postReq = (url, data) => {
  return fetch(`${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
const loginTo = () => {
  return fetch(`api/authenticate`);
};

const logout = () => {
  return fetch(`api/logout`);
};

const Register = (data) => {
  return postReq('api/signUp', data);
};

const getOtherUserData = (userName) => {
  return fetch(`/api/user/${userName}`).then((res) => res.json());
  // .then(({ otherUser }) => otherUser);
};

const getUserData = () => {
  return fetch('/api/getUserData').then((res) => res.json());
};

const FeedBacks = [
  {
    nameToShow: 'Shashi kumar',
    recipient: 'ram',
    relatedTo: 'Teachers day presentation',
    sender: 'thanya',
    suggestion: 'your presentation was awsome',
    time: '2020-09-24T06:20:46.266Z',
  },
  {
    nameToShow: 'Anonymous',
    recipient: 'thanya',
    relatedTo: 'new year Party',
    sender: 'micheal',
    suggestion: 'next time give invitation little earlier',
    time: '2020-01-2T06:20:46.266Z',
  },
];

const addFeedBack = (data) => {
  getUserData()
    .then(({ user }) => user)
    .then(({ userID }) => {
      FeedBacks.push({
        ...data,
        sender: userID,
        time: new Date(),
        id: FeedBacks.length,
      });
    });
  return new Promise((resolve) => resolve('ok'));
};

const getSentFeedBacks = () => {
  return new Promise((resolve) => {
    getUserData()
      .then(({ user }) => user)
      .then(({ userID }) => {
        const sent = FeedBacks.filter((feedBack) => feedBack.sender === userID);
        resolve(sent);
      });
  });
};

const getReceivedFeedBacks = () => {
  return new Promise((resolve) => {
    getUserData()
      .then(({ user }) => user)
      .then(({ userID }) => {
        const sent = FeedBacks.filter(
          (feedBack) => feedBack.recipient === userID
        );
        resolve(sent);
      });
  });
};

export default {
  loginTo,
  Register,
  getUserData,
  addFeedBack,
  getSentFeedBacks,
  getReceivedFeedBacks,
  getOtherUserData,
  logout,
};
