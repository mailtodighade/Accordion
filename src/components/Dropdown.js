import React, { useState, useEffect, useRef } from 'react';

function Dropdown({ label, options, selected, onsetSelected }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    //easy way to figure out where i have clicked the pointer
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return;
      } else {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      console.log('cleanup');
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map(option => {
    if (option.label === selected.label) {
      return null;
    }
    return (
      <div
        onClick={() => {
          console.log('item clicked');
          onsetSelected(option);
          console.log(option);
        }}
        key={option.value}
        className='item'
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='ui field'>
        <label className='label'>{label}</label>
        <div
          onClick={() => {
            console.log('Selected clicked');
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
      <div
        style={{
          position: 'absolute',
          top: '300px',
          backgroundColor: selected.value,
          height: '200px',
          width: '200px',
        }}
      ></div>
    </div>
  );
}

export default Dropdown;
