import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserCard from './../components/UserCard';

const Group = (props) => {
  const { groupID } = useParams();
  const history = useHistory();
  const [members, setMembers] = useState([]);
  const [ID, setGroupID] = useState([]);
  const [name, setGroupName] = useState([]);

  const redirectTo = (path) => {
    history.push(path);
  };
  const getMembers = () => {
    props.fetchAPI
      .getGroupMembers(groupID)
      .then(({ members, groupID, groupName }) => {
        if (members) {
          setMembers(members);
          setGroupID(groupID);
          setGroupName(groupName);
        }
      });
  };
  useEffect(getMembers, []);

  const users = members.map((user, index) => (
    <UserCard
      id={index}
      key={index}
      userID={user.userID}
      fullName={user.fullName}
      onClick={() => redirectTo(`/user/${user.userID}`)}
      src={user.src}
    />
  ));
  return (
    <div id={ID}>
      <div className='group_name center color'>{name}</div>
      <div className='inline'>{users}</div>
    </div>
  );
};

export default Group;
