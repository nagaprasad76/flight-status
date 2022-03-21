import { combineReducers } from 'redux'

import initial from "./initial";
import query from "./query";

import destinationReducer from './destinationReducer'
import flightsReducer from "./flightsReducer";

const rootReducer = combineReducers({
    destinationReducer,
    flightsReducer,
    initial,
    query
})

export default rootReducer