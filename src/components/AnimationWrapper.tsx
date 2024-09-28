'use client';

import { useEffect, useState } from 'react';

const AnimationWrapper = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure the initial content is painted
    const timer = setTimeout(() => {
      setIsLoaded(true);
      const textElements = document.querySelectorAll('.tsl');
      textElements.forEach((textElement, index) => {
        setTimeout(() => {
          textElement.classList.add('tsa');
        }, index * 30); // 0.03 * 1000 = 30
      });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //     const textElements = document.querySelectorAll('.tsl');

  //     textElements.forEach((textElement, index) => {
  //       setTimeout(() => {
  //         textElement.classList.add('tsa');
  //       }, index * 30);
  //     });
  //   }, []);

  return (
    <style jsx global>{`
      .tsl {
        opacity: ${isLoaded ? 1 : 0};
        transform: translateY(${isLoaded ? '0' : '20px'});
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
      }
      .tsa {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
  );
};

export default AnimationWrapper;
