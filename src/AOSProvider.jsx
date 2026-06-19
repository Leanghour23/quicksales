import { useEffect } from 'react';
import AOS from 'aos';

function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quart',
      once: true,
      offset: 80,
    });
  }, []);

  return children;
}

export default AOSProvider;
