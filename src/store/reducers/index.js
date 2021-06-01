import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import user from './user';
import events from './events';
import calendar from './calendar';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'user'],
};

const rootReducer = combineReducers({
  auth,
  user,
  events,
  calendar,
});

export default persistReducer(rootPersistConfig, rootReducer);
