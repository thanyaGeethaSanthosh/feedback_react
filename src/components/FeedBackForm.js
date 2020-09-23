import React, { useState } from 'react';
import { InputText, Submit } from './Form';

const FeedBackForm = (props) => {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [relatedTo, setRelatedTo] = useState('');

  const onSubmit = () => {
    const formData = { name: name || 'Anonymous', suggestion, relatedTo };
    setName('');
    setSuggestion('');
    setRelatedTo('');
    props.onSubmit(formData);
  };

  return (
    <div>
      <InputText
        value={name}
        handleChange={(event) => {
          setName(event.target.value);
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
