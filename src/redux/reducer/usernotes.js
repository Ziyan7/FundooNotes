import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  noteState: [],
  searchState: [],
};
const usernotes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_NOTES:
      return {
        ...state,
        noteState: action.data,
      };
    case ActionTypes.SET_SEARCHED_NOTES:
      return {
        ...state,
        searchState: action.data,
      };
    default:
      return state;
  }
};
export default usernotes;