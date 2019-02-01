import { ActionTypes as types } from '../constants/geographyConstants'

var defaultState = {
    destinations: [],
    jobTitles: [],
    sourceMarkets: [],
    f2wUrl: ''
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
        case types.GET_F2WURL_SUCCESS:
            return {
                ...state,
                f2wUrl: action.data.f2wUrl
            }
        default:
            return state
    }
}
