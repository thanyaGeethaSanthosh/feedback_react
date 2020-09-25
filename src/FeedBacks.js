import React, { useEffect, useState } from 'react';
import SingleFeedBack from './components/SingleFeedBack';

const FeedBackList = (props) => {
  const feebBacks = props.feedBacks.map(
    ({ nameToShow, recipient, relatedTo, suggestion, time }, id) => (
      <SingleFeedBack
        key={id}
        nameToShow={nameToShow}
        recipient={recipient}
        relatedTo={relatedTo}
        suggestion={suggestion}
        time={time}
        id={id}
      />
    )
  );
  return <div>{feebBacks}</div>;
};

const Tab = (props) => {
  const { activeTab, value, toggleActive } = props;
  return (
    <div
      className={`${
        activeTab === value ? 'active def_pointer' : 'in_active pointer'
      } tab`}
      onClick={() => toggleActive(value)}
    >
      {value}
    </div>
  );
};

const FeedBacks = (props) => {
  const { fetchAPI } = props;
  const [activeTab, setActiveTab] = useState('Received');
  const [sentFeedBack, setSentFeedBack] = useState([]);
  const [receivedFeedBack, setReceivedFeedBack] = useState([]);

  const getSentFeedBack = () => {
    fetchAPI.getSentFeedBacks().then((list) => {
      setSentFeedBack(list);
    });
  };

  const getReceivedFeedBack = () => {
    fetchAPI.getReceivedFeedBacks().then((list) => {
      setReceivedFeedBack(list);
    });
  };

  useEffect(getSentFeedBack, [activeTab]);
  useEffect(getReceivedFeedBack, [activeTab]);

  const tabsAndList = {
    Received: receivedFeedBack,
    Sent: sentFeedBack,
  };
  const tabs = Object.keys(tabsAndList).map((value, index) => {
    return (
      <Tab
        activeTab={activeTab}
        value={value}
        key={index}
        toggleActive={setActiveTab}
      />
    );
  });

  return (
    <div>
      <div className='inline tabs'>{tabs}</div>
      <div>
        <FeedBackList feedBacks={tabsAndList[activeTab]} />
      </div>
    </div>
  );
};

export default FeedBacks;
