import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/config';
import Navigator from './src/navigations';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height: '100%'}}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
