import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  //implemeting the state
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  //this useEffect function will run only when the component
  // firts rendered on the screen...

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
