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

  export const setCreateNote = (notes) => {
    return {
        type: ActionTypes.SET_CREATE_NOTES,
        data: notes,
    };
  };
  export const setUpdate = (note) => {
    return {
        type: ActionTypes.SET_UPDATE_NOTE,
        data: note,
    };
 };
 export const setTrashValue = (value) => {
  return {
    type: ActionTypes.SET_TRASH_VALUE,
    data: value,
  };
};

export const setTrash = (note) => {
  return {
      type: ActionTypes.SET_TRASH_NOTE,
      data: note,
  };
};

export const addTrashNote = (note) => {
  return {
    type: ActionTypes.ADD_TRASH_NOTE,
    data: note,
  };
};

export const removeTrashNote = (note) => {
  return {
    type: ActionTypes.REMOVE_TRASH_NOTE,
    data: note,
  };
};

export const deleteFromTrash = (note) => {
  return {
      type: ActionTypes.SET_DELETE_NOTE,
      data: note,
    };
};

export const setUndoNote = (value) => {
  return {
    type: ActionTypes.SET_UNDO_STATE,
    data: value,
  };
};



