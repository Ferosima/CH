import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import user from './user';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'auth'],
};

const rootReducer = combineReducers({
  auth,
  user,
});

export default persistReducer(rootPersistConfig, rootReducer);
