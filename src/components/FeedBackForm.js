import React, { useState } from 'react';
import { InputText, Submit } from './Form';

const FeedBackForm = (props) => {
  const [nameToShow, setNameToShow] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [relatedTo, setRelatedTo] = useState('');

  const onSubmit = () => {
    const formData = {
      nameToShow: nameToShow || 'Anonymous',
      suggestion,
      relatedTo,
    };
    setNameToShow('');
    setSuggestion('');
    setRelatedTo('');
    props.onSubmit(formData);
  };

  return (
    <div>
      <InputText
        value={nameToShow}
        handleChange={(event) => {
          setNameToShow(event.target.value);
        }}
      />
      <InputText
        value={suggestion}
        handleChange={(event) => {
          setSuggestion(event.target.value);
        }}
      />
      <div>
        <InputText
          value={relatedTo}
          handleChange={(event) => {
            setRelatedTo(event.target.value);
          }}
        />
        <Submit active={suggestion.length > 0} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default FeedBackForm;
