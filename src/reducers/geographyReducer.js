import { ActionTypes as types } from '../constants/geographyConstants'

var defaultState = {
    destinations: []
}

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_DESTINATIONS_SUCCESS:
            return {
                ...state,
                destinations: action.data.destinations
            }
        default:
            return state
    }
}
