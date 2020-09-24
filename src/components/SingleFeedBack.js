import React from 'react';

const SingleFeedBack = (props) => {
  const { nameToShow, recipient, relatedTo, suggestion, time, id } = props;
  return (
    <div id={id} className='card'>
      <h2>
        From : {nameToShow} | To:{recipient}
      </h2>
      <h3>{relatedTo}</h3>
      <p>{suggestion}</p>
      <p>{time}</p>
    </div>
  );
};

export default SingleFeedBack;
