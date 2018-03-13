const ADD_TRIP = 'ADD_TRIP'
const UPDATE_TRIP = 'UPDATE_TRIP'
const DELETE_TRIP = 'DELETE_TRIP'

export const addTrip = (trip) => {
  return { type: ADD_TRIP, trip }
}

export const updateTrip = (trip) => {
  return { type: UPDATE_TRIP, trip }
}

export const deleteTrip = (id) => {
  return { type: DELETE_TRIP, id }
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TRIP:
      return [action.trip, ...state]
    case UPDATE_TRIP:
      return state.map( trip => {
        if (trip.id === action.trip.id)
          return action.trip
        return trip
      })
    case DELETE_TRIP:
      return state.filter( t => t.id !== action.id )
    default: 
      return state
  }
}

