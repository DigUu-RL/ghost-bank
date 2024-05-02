import { useEffect, useState } from 'react';

export type TMedia = {
  isMobile: boolean;
};

export const useMedia = (): TMedia => {
  // * states
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    setIsMobile(width <= 768);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile
  };
};
