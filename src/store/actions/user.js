import {createAction} from 'redux-actions';
import {USER_ENTRY} from '../types/user';

export const userEntry = createAction(USER_ENTRY, (payload) => payload);
