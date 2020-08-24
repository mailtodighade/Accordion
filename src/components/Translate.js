import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
  {
    label: 'afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div className='ui form'>
      <div>
        <div className='field'>
          <label>Enter Some Text: </label>
          <input
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
            type='text'
            placeholder='Enter text here'
          />
        </div>
      </div>
      <Dropdown
        label='select a Language:'
        options={options}
        selected={language}
        onsetSelected={setLanguage}
      />
      <hr />
      <h3 className='ui header'> Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
