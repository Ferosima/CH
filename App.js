import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/config';
import Navigator from './src/navigations';
import Auth from './src/screens/AuthScreen';

const App = () => {
  console.log(store.getState().user);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height: '100%'}}>
        <Provider store={store}>
          {store.getState().user.isLogin ? <Navigator /> : <Auth />}
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
