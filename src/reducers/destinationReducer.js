// import Airports from '../data/airports';

// export default function airports(state = Object.keys(Airports.results), action) {
//   return state;
// }

export default function destinationReducer(state = {}, action) {
  switch (action.type) {
    case 'Fetch': {
      return {
        destinations: action.airports,
      }
    }
    default: {
      return state
    }
  }
}