import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top for page changes
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Also ensure smooth scroll after immediate jump
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 10);
    } else {
      // Handle hash navigation (for sections on homepage)
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
