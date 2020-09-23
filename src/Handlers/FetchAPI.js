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

const Register = (data) => {
  return postReq('/api/signUp', data).then((res) => console.log(res));
};

const getLoggedUser = () => {
  return new Promise((resolve) => {
    resolve({
      src:
        'https://res.cloudinary.com/dzkeqw3qc/image/upload/v1600891888/myAvatar_t0rjgd.png',
      userID: 'thani',
      fullName: 'Thanya Geetha Santhosh',
      profileURL: '/',
    });
  });
};

const users = [
  {
    src:
      'https://res.cloudinary.com/dzkeqw3qc/image/upload/v1600891888/myAvatar_t0rjgd.png',
    userID: 'thani',
    fullName: 'Thanya Geetha Santhosh',
    profileURL: '/thani',
  },
  {
    src:
      'https://res.cloudinary.com/dzkeqw3qc/image/upload/v1600893456/myAvatar_1_kputbe.png',
    userID: 'ram',
    fullName: 'Ram Jeevan',
    profileURL: '/ram',
  },
  {
    src:
      'https://res.cloudinary.com/dzkeqw3qc/image/upload/v1600893457/myAvatar_2_h2oqj2.png',
    userID: 'micheal',
    fullName: 'Micheal Dsouza',
    profileURL: '/micheal',
  },
];

const FeedBacks = [];

const getUser = (userName) => {
  const user = users.find((user) => userName === user.userID);
  return new Promise((resolve) => resolve(user));
};

const addFeedBack = (data) => {
  FeedBacks.push(data);
  return new Promise((resolve) => resolve('ok'));
};

export default {
  loginTo,
  Register,
  getLoggedUser,
  getUser,
  addFeedBack,
};
