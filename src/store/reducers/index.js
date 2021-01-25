import { combineReducers } from "redux";

import user from "./user";
// import conferenceReducer from "./conferences/conferencesReducer";

const rootReducer = combineReducers({
  user,
  // conferenceReducer: conferenceReducer,
});

export default rootReducer;
