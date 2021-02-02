import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/config';
import Navigator from './src/navigations';
import Auth from './src/screens/AuthScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height: '100%'}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {store.getState().auth.isLogin ? <Navigator /> : <Auth />}
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
