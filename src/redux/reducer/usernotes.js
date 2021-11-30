import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  noteState: [],
  searchState: [],
  trashState: "false",
  trash: [],
  pin: [],
  UndoState: false,
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
      
      newNote[action.data.index] = action.data.data;
      return {
       
        ...state,
        noteState: newNote,
      };

    case ActionTypes.SET_TRASH_VALUE:
      return {
        ...state,
        trashState: action.data,
      };

      case ActionTypes.SET_TRASH_NOTE:
        return {
          ...state,
          trash: action.data,
        };

        case ActionTypes.ADD_TRASH_NOTE:
      let updatedNote = state.noteState.filter((note) => note._id !== action.data._id);
      let updatedTrashNote = [...state.trash];
      updatedTrashNote.push(action.data);
      return { ...state, noteState: updatedNote, trash: updatedTrashNote };
      

      case ActionTypes.REMOVE_TRASH_NOTE:
      let updatedTrash = state.trash.filter((note) => note._id !== action.data._id);
      let updatedNotes = [...state.noteState];
      updatedNotes.push(action.data);
      return { ...state, noteState: updatedNotes, trash: updatedTrash };

      case ActionTypes.SET_DELETE_NOTE:
        let newTrash = state.trash.filter((note) => note._id !== action.data._id);
        return {
          ...state,
          trash: newTrash,
        };

        case ActionTypes.SET_UNDO_STATE:
      return {
        ...state,
        UndoState: action.data,
      };
    default:
      return state;
  }
};
export default usernotes;
