import { ActionTypes as types } from '../constants/geographyConstants'

var defaultState = {
    destinations: [],
    jobTitles: [],
    sourceMarkets: []
}

export default function geographyReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_DESTINATIONS_SUCCESS:
            return {
                ...state,
                destinations: action.data.destinations
            }
        case types.GET_JOBTITLES_SUCCESS:
            return {
                ...state,
                jobTitles: action.data.jobTitles
            }
        case types.GET_SOURCEMARKETS_SUCCESS:
            return {
                ...state,
                sourceMarkets: action.data.sourceMarkets
            }
        default:
            return state
    }
}
