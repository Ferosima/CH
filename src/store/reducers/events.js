import {
  EVENT_FETCH_EVENTS,
  EVENT_FETCH_EVENTS_SUCCESS,
  EVENT_FETCH_EVENTS_FAILED,
  EVENT_CLEAR,
} from '../types/events';

const initialState = {
  list: null,
  event: null,
  pending: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_FETCH_EVENTS:
      return {
        ...state,
        pending: true,
      };
    case EVENT_FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        list: action.payload,
      };
    case EVENT_FETCH_EVENTS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case EVENT_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
