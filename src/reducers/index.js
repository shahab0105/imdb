import { combineReducers } from "redux";
import newInputValue from "./newInputValue";
import updateMovieList from "./updatemovieList";
export default combineReducers({
  newInputValue,
  movieList: updateMovieList
});
