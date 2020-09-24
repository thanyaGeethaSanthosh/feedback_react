import React, { useState } from 'react';
import { InputText, Submit, TextArea } from './Form';

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
    <div className=' little_top_space avg_width middle'>
      <InputText
        value={nameToShow}
        placeholder='What you want to call yourself!'
        handleChange={(event) => {
          setNameToShow(event.target.value);
        }}
      />
      <TextArea
        placeholder='Type your valuable suggestions here...'
        value={suggestion}
        handleChange={(event) => {
          setSuggestion(event.target.value);
        }}
      />
      <div className='inline avg_width margin_left'>
        <InputText
          className='small_input_text'
          placeholder='It is about which incident?'
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
