/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import routes from '@config/routes';
import NumidaTheme from '@views/themes/theme';



function App(): React.JSX.Element {


  return (
      <NavigationContainer>
        

        <PaperProvider theme={NumidaTheme}>
          {routes()}
        </PaperProvider>
  
      </NavigationContainer>
  );
}

export default App;
