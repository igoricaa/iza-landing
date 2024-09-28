'use client';

import { useEffect } from 'react';

const AnimationWrapper = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.tsl');

    textElements.forEach((textElement, index) => {
      setTimeout(() => {
        textElement.classList.add('tsa');
      }, index * 30);
    });
  }, []);

  return null;
};

export default AnimationWrapper;
