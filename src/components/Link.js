import React from 'react';

function Link({ href, className, children }) {
  const onClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    //to prevent the default behaviour of the page...
    event.preventDefault();
    //in order to change the url without a page reload
    window.history.pushState({}, '', href);

    const nanvEvent = new PopStateEvent('popstate');
    window.dispatchEvent(nanvEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;
