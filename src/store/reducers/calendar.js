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

const initialState = {
  list: [],
  countEventsOnWeek: 0,
  intersectingEvents: [],
  pending: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CALENDAR_FETCH_CALENDAR:
      return {
        ...state,
        pending: true,
      };
    case CALENDAR_FETCH_CALENDAR_SUCCESS:
      return {
        ...state,
        pending: false,
        list: action.payload,
      };
    case CALENDAR_FETCH_CALENDAR_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case CALENDAR_FETCH_INTERSECTING_EVENTS:
      return {
        ...state,
        pending: true,
        intersectingEvents: [],
      };
    case CALENDAR_FETCH_INTERSECTING_EVENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        intersectingEvents: action.payload,
      };
    case CALENDAR_FETCH_INTERSECTING_EVENTS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case CALENDAR_ADD_EVENT_TO_CALENDAR:
      return {
        ...state,
        pending: true,
        intersectingEvents: [],
      };
    case CALENDAR_ADD_EVENT_TO_CALENDAR_SUCCESS:
      return {
        ...state,
        pending: false,
        list: [...state.list, action.payload],
        intersectingEvents: [...state.intersectingEvents, action.payload],
      };
    case CALENDAR_ADD_EVENT_TO_CALENDAR_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case CALENDAR_DELETE_EVENT_FROM_CALENDAR:
      return {
        ...state,
        pending: true,
        intersectingEvents: [],
      };
    case CALENDAR_DELETE_EVENT_FROM_CALENDAR_SUCCESS:
      return {
        ...state,
        pending: false,
        list: state.list.filter((el) => el.id != action.payload),
        intersectingEvents: initialState.intersectingEvents,
      };
    case CALENDAR_DELETE_EVENT_FROM_CALENDAR_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case CALENDAR_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
