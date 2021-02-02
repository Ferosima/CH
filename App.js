import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainLayout from './src/MainLayout';
import {persistor, store} from './src/store/config';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height: '100%'}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainLayout />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
