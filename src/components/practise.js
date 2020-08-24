import React, { useState, useEffect } from 'react';

function Dropdown({ options, selected, onSelectedChange }) {
  //set state....
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', () => {
      console.log('clicked 1');
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        onClick={() => {
          console.log('clicked 2');
          onSelectedChange(option);
        }}
        key={option.value}
        className='item'
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className='ui form'>
      <div className='ui field'>
        <label className='label'> select a color: </label>
        <div
          onClick={() => {
            console.log('clicked 3');
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
