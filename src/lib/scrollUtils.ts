'use client';

import { useEffect } from 'react';

// Scroll utility functions
export const scrollToElement = (elementId: string, offset: number = 88) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Refresh AOS after scrolling
    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.refresh();
      }
    }, 100);
  }
};

export const useScrollToHash = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        setTimeout(() => scrollToElement(elementId), 100);
      }
    };

    // Handle initial load with hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};
