import { createAction } from "redux-actions";

export const setConferences = createAction(
  "conferences/setConferences",
  (payload) => payload
);
export const setCurrent_Conference = createAction(
  "conferences/setCurentConference",
  (payload) => payload
);
