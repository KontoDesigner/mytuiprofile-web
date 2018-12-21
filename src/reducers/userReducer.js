import { ActionTypes as types } from '../constants/userConstants'

var defaultState = {
    name: null,
    email: null,
    roles: []
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                name: action.data.user.name,
                email: action.data.user.email,
                roles: action.data.user.roles
            }
        default:
            return state
    }
}
