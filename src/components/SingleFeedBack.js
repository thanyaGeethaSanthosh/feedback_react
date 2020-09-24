import React from 'react';

const SingleFeedBack = (props) => {
  const { nameToShow, recipient, relatedTo, suggestion, time, id } = props;
  return (
    <div id={id}>
      <h2>
        From : {nameToShow} | To:{recipient}
      </h2>
      <h4>{relatedTo}</h4>
      <p>{suggestion}</p>
      <p>{time}</p>
    </div>
  );
};

export default SingleFeedBack;
