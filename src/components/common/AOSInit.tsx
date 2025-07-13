'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quart',
      once: false, // Allow animations to trigger multiple times
      mirror: false,
      offset: 50,
      disable: false,
      anchorPlacement: 'top-bottom',
      debounceDelay: 50,
      throttleDelay: 99,
    });

    // Refresh AOS on route changes or when window is resized
    const handleResize = () => {
      AOS.refresh();
    };

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return null;
}
