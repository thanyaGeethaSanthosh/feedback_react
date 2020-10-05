import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Submit, InputText } from './Form';

const JoinGroup = (props) => {
  const history = useHistory();
  const [id, setID] = useState('');

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const joinGroup = () => {
    props.fetchAPI.joinGroup(id).then(({ groupName }) => {
      props.togglePopUpActive();
      history.push(`/group/${groupName}`);
    });
  };

  return (
    <div
      className={`pop_box pop_text ${
        props.active ? 'front_view' : 'back_view'
      }`}
    >
      <InputText
        handleChange={handleChange}
        className='small_input_text'
        placeholder='Type group ID to join'
        value={id}
      />
      <div>
        <Submit value='Join' active={true} onClick={joinGroup} />
        <Submit
          value='Cancel'
          active={true}
          onClick={props.togglePopUpActive}
        />
      </div>
    </div>
  );
};

const CreateGroup = (props) => {
  const [groupName, setGroupName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setGroupName(event.target.value);
  };
  const createGroup = () => {
    props.fetchAPI.createGroup(groupName).then(({ groupName, groupID }) => {
      setMessage(`Share this id: ${groupID} to join`);
    });
  };

  return (
    <div
      className={`pop_box pop_text ${
        props.active ? 'front_view' : 'back_view'
      }`}
    >
      <div>{message}</div>
      <InputText
        handleChange={handleChange}
        className='small_input_text'
        placeholder='Type group Name '
        value={groupName}
      />
      <div>
        <Submit value='Create' active={true} onClick={createGroup} />
        <Submit
          value='Cancel'
          active={true}
          onClick={props.togglePopUpActive}
        />
      </div>
    </div>
  );
};

const PopUp = (props) => {
  const [join, setJoin] = useState(false);
  const [create, setCreate] = useState(false);
  const [content, setContent] = useState('');

  const toggleCreate = () => {
    setCreate((active) => !active);
  };
  const toggleJoin = () => {
    setJoin((active) => !active);
  };

  const joinButton = (
    <Submit
      active={!join}
      onClick={() => {
        setContent(
          <JoinGroup
            fetchAPI={props.fetchAPI}
            active={join}
            togglePopUpActive={toggleJoin}
          />
        );
        toggleJoin();
      }}
      value='Join group'
    />
  );

  const createButton = (
    <Submit
      active={!create}
      onClick={() => {
        setContent(
          <CreateGroup
            fetchAPI={props.fetchAPI}
            active={create}
            togglePopUpActive={toggleCreate}
          />
        );
        toggleCreate();
      }}
      value='Create group'
    />
  );

  return (
    <div className={`pop_up_Screen second_front_view`}>
      <div className='group_buttons'>
        {joinButton}
        {createButton}
      </div>
      {join || create ? content : ''}
    </div>
  );
};

export default PopUp;
