import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import user from './user';
import events from './events';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  user,
  events,
});

export default persistReducer(rootPersistConfig, rootReducer);
