
export default function flights(state = {}, action) {
  switch (action.type) {
    case 'FETCH_FLIGHT': {
      return {
        flights: action.flights,
      }
    }
    default: {
      return state
    }
  }
}