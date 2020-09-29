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
};

const getUserData = () => {
  return fetch('/api/getUserData').then((res) => res.json());
};

const addFeedBack = (data) => {
  return postReq('/api/addFeedBack', data);
};

const getSentFeedBacks = (data) => {
  return fetch('/api/getSentFeedBacks').then((res) => res.json());
};

const getReceivedFeedBacks = (data) => {
  return fetch('/api/getReceivedFeedBacks').then((res) => res.json());
};

const getGroupMembers = (groupID) => {
  return fetch(`/api/getGroupMembers/${groupID}`).then((res) => res.json());
};

const getGroupsOf = (groupID) => {
  return fetch('/api/getGroupsOf').then((res) => res.json());
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
  getGroupMembers,
  getGroupsOf,
};
