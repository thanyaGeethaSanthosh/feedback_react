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

// const getLoggedUser = () => {
//   return new Promise((resolve) => {
//     resolve({
//       user: {
//         src:
//           'https://res.cloudinary.com/dzkeqw3qc/image/upload/v1600891888/myAvatar_t0rjgd.png',
//         userID: 'thani',
//         fullName: 'Thanya Geetha Santhosh',
//         profileURL: '/',
//       },
//       loggedIn: true,
//     });
//   });
// };

const getLoggedUser = () => {
  return new Promise((resolve) => {
    resolve({
      user: null,
      loggedIn: false,
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
  {
    src:
      'https://res.cloudinary.com/dzkeqw3qc/image/upload/v1600925421/myAvatar_3_urvkvu.png',
    userID: 'asna',
    fullName: 'Fathimathul Asna',
    profileURL: '/asna',
  },
];

const FeedBacks = [
  {
    nameToShow: 'Shashi kumar',
    recipient: 'ram',
    relatedTo: 'Teachers day presentation',
    sender: 'thani',
    suggestion: 'your presentation was awsome',
    time: '2020-09-24T06:20:46.266Z',
  },
  {
    nameToShow: 'Anonymous',
    recipient: 'thani',
    relatedTo: 'new year Party',
    sender: 'micheal',
    suggestion: 'next time give invitation little earlier',
    time: '2020-01-2T06:20:46.266Z',
  },
];

const getUser = (userName) => {
  const user = users.find((user) => userName === user.userID);
  return new Promise((resolve) => resolve(user));
};

const addFeedBack = (data) => {
  getLoggedUser()
    .then(({ user }) => user)
    .then(({ userID }) => {
      FeedBacks.push({
        ...data,
        sender: userID,
        time: new Date(),
        id: FeedBacks.length,
      });
    });
  console.log(FeedBacks);
  return new Promise((resolve) => resolve('ok'));
};

const getSentFeedBacks = () => {
  return new Promise((resolve) => {
    getLoggedUser()
      .then(({ user }) => user)
      .then(({ userID }) => {
        const sent = FeedBacks.filter((feedBack) => feedBack.sender === userID);
        resolve(sent);
      });
  });
};

const getReceivedFeedBacks = () => {
  return new Promise((resolve) => {
    getLoggedUser()
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
  getLoggedUser,
  getUser,
  addFeedBack,
  getSentFeedBacks,
  getReceivedFeedBacks,
};
