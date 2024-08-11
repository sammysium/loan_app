import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProps } from '@config/routes';


const { width } = Dimensions.get('window');

interface IProps {
  navigation: NavigationProps
}

const Header: React.FC<IProps> = ({navigation}) => {
  
  return (
    <View style={styless.headerContainer}>
      <Text style={styless.companyName}>Numida</Text>
      <View style={styless.buttonContainer}>
        <Button>Login</Button>
        <Button>Apply for a loan</Button>
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
