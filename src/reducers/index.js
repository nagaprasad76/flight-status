import destinationReducer from "./destinationReducer";
import flightsReducer from "./flightsReducer";
import initial from "./initial";
import query from "./query";
import { combineReducers } from "redux";

export default combineReducers({
  destinationReducer,
  flightsReducer,
  initial,
  query
});