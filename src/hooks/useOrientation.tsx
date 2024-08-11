import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

const useOrientation = () => {
  const { width, height } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(width > height);

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(width > height);
    };

    // Update orientation on dimension change
    updateOrientation();

  }, [width, height]);

  return { isLandscape };
};

export default useOrientation;
