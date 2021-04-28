import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Geocoder from 'react-native-geocoding';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import MainLayout from './src/MainLayout';
import {persistor, store} from './src/store/config';

Geocoder.init('AIzaSyAfzKDjnprmtgc3oyFQJvelYSn11BQfibo');

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} hidden />
      <SafeAreaView style={{height: '100%'}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <MainLayout />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
