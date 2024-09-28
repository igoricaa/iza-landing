'use client';

import { useEffect } from 'react';

const AnimationWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.tsl');

    textElements.forEach((textElement, index) => {
      setTimeout(() => {
        textElement.classList.add('tsa');
      }, index * 0.03 * 1000);
    });
  }, []);

  return children;
};

export default AnimationWrapper;
