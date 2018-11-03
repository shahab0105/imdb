//import store from 'redux';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";
const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
    typeof window.devToolsExtention !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);
export default store;
