import { Platform } from 'react-native';
import {  MD3LightTheme as DefaultTheme } from 'react-native-paper';



const NumidaTheme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#60BDDC',
        surface: '#F3FBFB',
        secondaryContainer: "#ffffff"
    }
};

export default NumidaTheme;
