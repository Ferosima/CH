import {createAction} from 'redux-actions';
import {
  CALENDAR_FETCH_CALENDAR,
  CALENDAR_FETCH_CALENDAR_SUCCESS,
  CALENDAR_FETCH_CALENDAR_FAILED,
  CALENDAR_FETCH_INTERSECTING_EVENTS,
  CALENDAR_FETCH_INTERSECTING_EVENTS_SUCCESS,
  CALENDAR_FETCH_INTERSECTING_EVENTS_FAILED,
  CALENDAR_ADD_EVENT_TO_CALENDAR,
  CALENDAR_ADD_EVENT_TO_CALENDAR_SUCCESS,
  CALENDAR_ADD_EVENT_TO_CALENDAR_FAILED,
  CALENDAR_DELETE_EVENT_FROM_CALENDAR,
  CALENDAR_DELETE_EVENT_FROM_CALENDAR_SUCCESS,
  CALENDAR_DELETE_EVENT_FROM_CALENDAR_FAILED,
  CALENDAR_CLEAR,
} from '../types/calendar';

export const fetchCalendar = createAction(CALENDAR_FETCH_CALENDAR);
export const fetchCalendarSuccess = createAction(
  CALENDAR_FETCH_CALENDAR_SUCCESS,
  (payload) => payload,
);
export const fetchCalendarFailed = createAction(
  CALENDAR_FETCH_CALENDAR_FAILED,
  (payload) => payload,
);

export const fetchIntersectingEvents = createAction(
  CALENDAR_FETCH_INTERSECTING_EVENTS,
  (payload) => payload,
);
export const fetchIntersectingEventsSuccess = createAction(
  CALENDAR_FETCH_INTERSECTING_EVENTS_SUCCESS,
  (payload) => payload,
);
export const fetchIntersectingEventsFailed = createAction(
  CALENDAR_FETCH_INTERSECTING_EVENTS_FAILED,
  (payload) => payload,
);

export const addEventToCalendar = createAction(
  CALENDAR_ADD_EVENT_TO_CALENDAR,
  (payload) => payload,
);
export const addEventToCalendarSuccess = createAction(
  CALENDAR_ADD_EVENT_TO_CALENDAR_SUCCESS,
  (payload) => payload,
);
export const addEventToCalendarFailed = createAction(
  CALENDAR_ADD_EVENT_TO_CALENDAR_FAILED,
  (payload) => payload,
);

export const deleteEventFromCalendar = createAction(
  CALENDAR_DELETE_EVENT_FROM_CALENDAR,
  (payload) => payload,
);
export const deleteEventFromCalendarSuccess = createAction(
  CALENDAR_DELETE_EVENT_FROM_CALENDAR_SUCCESS,
  (payload) => payload,
);
export const deleteEventFromCalendarFailed = createAction(
  CALENDAR_DELETE_EVENT_FROM_CALENDAR_FAILED,
);

export const eventClear = createAction(CALENDAR_CLEAR);
