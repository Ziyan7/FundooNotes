import { combineReducers } from "redux";
import usernotes from "./usernotes";
const reducers = combineReducers({
  allNotes: usernotes,
});
export default reducers;