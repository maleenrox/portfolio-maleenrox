/* global window */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top-left corner of the window whenever the route path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything to the DOM
};

export default ScrollToTop;