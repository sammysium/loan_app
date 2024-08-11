import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import useOrientation from '@hooks/useOrientation';
import { getSizeDetails } from '@views/layouts/responsive';


const useResponsiveScreen = () => {
    const { width } = Dimensions.get('window');
    
    const { isLandscape } = useOrientation();
    const [padding, setPadding] = useState(getSizeDetails(isLandscape, width));

    useEffect(() => {
        const handleResize = () => {
            setPadding(getSizeDetails(isLandscape, width));
        };

        // Add event listener for screen size changes
        const subscription = Dimensions.addEventListener('change', handleResize);

        // Cleanup the event listener on unmount
        return () => {
            subscription?.remove();
        };
    }, [isLandscape, padding]); // Dependency array now includes isLandscape


    return padding;
};

export default useResponsiveScreen;
