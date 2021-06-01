import {createAction} from 'redux-actions';
import {
  EVENT_FETCH_EVENTS,
  EVENT_FETCH_EVENTS_SUCCESS,
  EVENT_FETCH_EVENTS_FAILED,
  EVENT_CLEAR,
} from '../types/events';

export const fetchEvents = createAction(EVENT_FETCH_EVENTS);

export const fetchEventsSuccess = createAction(
  EVENT_FETCH_EVENTS_SUCCESS,
  (payload) => payload,
);
export const fetchEventsFailed = createAction(
  EVENT_FETCH_EVENTS_FAILED,
  (payload) => payload,
);

export const eventClear = createAction(EVENT_CLEAR);
// TODO add logout
