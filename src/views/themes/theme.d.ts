import 'react-native-paper';

declare module 'react-native-paper' {
    export interface Theme {
        myOwnProperty?: boolean;
        fontSizes?: {
            small: number;
            medium: number;
            large: number;
        };
        colors: {
            primary?: string;
            surface?: string;
            secondarySurface?: string;
        };
    }
}
