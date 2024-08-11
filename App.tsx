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
import { ApolloProvider } from '@apollo/client';
import client from '@gql/client/client';
import { AppContextProvider } from '@store/AppContext';


function App(): React.JSX.Element {


  return (
      <NavigationContainer>
        <AppContextProvider>
        <ApolloProvider client={client}>
        <PaperProvider theme={NumidaTheme}>
          {routes()}
        </PaperProvider>
        </ApolloProvider>

        </AppContextProvider>
  
      </NavigationContainer>
  );
}

export default App;
