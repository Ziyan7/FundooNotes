import {ActionTypes} from '../constants/actionTypes'
export const setAllNotes = (notes) => {
  return {
    type: ActionTypes.SET_ALL_NOTES,
    data: notes
  };
};

export const searchNotes = (note) => {
    return {
      type: ActionTypes.SET_SEARCHED_NOTES,
      data: note
    };
  };
