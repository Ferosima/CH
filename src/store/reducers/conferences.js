import { SET_CONFERENCES, SET_CURRENT_CONFERENCE } from './conferencesActions'
const initialState = {
    conferencesId: [],
    currentConferenceID: 0
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFERENCES:
            {
                console.log("SET_CONFERENCES ", action)
                return {
                    ...state,
                    conferencesId: action.payload.trueFalse,
                }
            }
        case SET_CURRENT_CONFERENCE:
            {
                console.log("SET_CONFERENCES ", action)
                return {
                    ...state,
                    currentConferenceID: action.payload.trueFalse,
                }
            }
        default:
            {
                return state;
            }
    }
};
export default authReducer;