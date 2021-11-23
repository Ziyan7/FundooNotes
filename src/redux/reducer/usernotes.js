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
    case ActionTypes.SET_CREATE_NOTES:
      return {
        ...state,
        noteState: [...state.noteState, action.data],
      };
    case ActionTypes.SET_UPDATE_NOTE:
      let newNote = [...state.noteState];
      console.log("zxcvbnm")
      console.log(action.data);
      newNote[action.data.index] = action.data.data;
      return {
        ...state,
        noteState: newNote,
      };
    default:
      return state;
  }
};
export default usernotes;
