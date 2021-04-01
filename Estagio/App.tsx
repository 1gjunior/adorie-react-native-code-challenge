import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './my-theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/screens/home.screen';
import {Photos} from './src/screens/photos.screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Photos" component={Photos} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
