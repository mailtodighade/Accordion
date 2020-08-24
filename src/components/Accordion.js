import React, { useState } from 'react';

const Accordion = ({ items }) => {
  //providing a state
  const [activeIndex, setactiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    //conditional rendering
    const active = activeIndex === index ? 'active' : '';
    return (
      <React.Fragment key={index}>
        <div
          onClick={() => {
            setactiveIndex(index);
          }}
          className={`title ${active}`}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p className='transition '>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      <div className={`ui segment`}>
        <div className={`ui accordion`}>{renderedItems}</div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
