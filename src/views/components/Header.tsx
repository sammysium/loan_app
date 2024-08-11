import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { NavigationProps } from '@config/routes';
import AppButton, { ButtonType } from './AppButton';


const { width } = Dimensions.get('window');

interface IProps {
  navigation: NavigationProps
}

const Header: React.FC<IProps> = ({navigation}) => {
  const { colors } = useTheme()
  return (
    <View style={styless.headerContainer}>
      <Text style={styless.companyName}>Numida</Text>
      <View style={styless.buttonContainer}>
      <AppButton 
             backgroundColor={colors.secondaryContainer}
             upperCase={false}
             buttonType={ButtonType.Text} 
             labelTranslationId='login' 
             textColor={colors.primary}
             onPressHandler={() => console.log('go to login')} 
        />
        <AppButton 
             backgroundColor={colors.secondaryContainer}
             upperCase={false}
             buttonType={ButtonType.Text} 
             labelTranslationId='login' 
             textColor={colors.primary}
             onPressHandler={() => console.log('go to loan application screen')} 
        />
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  headerContainer: {
    width: width,
    height: 60, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 15, 
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd'
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#B7E3F1"
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Header;
