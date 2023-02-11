/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, } from 'react';
import {
  StatusBar,
  LogBox
} from 'react-native';
import store from './src/redux/store';
import { Provider, } from 'react-redux';
import AuthNavigation from './navigation/AuthNavigation';

const App = (props) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor("#302a69")

  }, []);

  LogBox.ignoreLogs(['Remote debugger']);

  return (
    <Provider store={store}>
      <AuthNavigation />

    </Provider>
  )
}
export default App;