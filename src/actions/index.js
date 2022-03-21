import { 
  SEARCH_FLIGHT,
  SET_INITIAL,
  SET_ORIGIN_INPUT,
  SET_DEST_INPUT,
  SET_DEPT_INPUT,
} from "../constants/action-types";
import { url } from '../constants/server'; 

export const setInitial = val => ({
  type: SET_INITIAL,
  payload: val
});

export const searchFlight = (query) => ({
  type: SEARCH_FLIGHT,
  payload: {
    query
  }
});

export const setOriginInput = val => ({
  type: SET_ORIGIN_INPUT,
  payload: val
});

export const setDestInput = val => ({
  type: SET_DEST_INPUT,
  payload: val
});

export const setDeptInput = val => ({
  type: SET_DEPT_INPUT,
  payload: val
});

export const getAllDestinations = (dispatch) => {
  const { serverUrl, aiportService } = url
  fetch(`${serverUrl}${aiportService}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'Fetch',
        airports: data.results,
      })
    });
}

export const getFlights = (dispatch, origin, destination, date) => {
  const { serverUrl, flightService } = url
  fetch(`${serverUrl}${flightService}?origin=${origin}&destination=${destination}&departureDate=${date}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'FETCH_FLIGHT',
        flights: data.results,
      })
    });
}
