import { combineReducers } from 'redux'
import ajaxCallsInProgress from './ajaxStatusReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import geographyReducer from './geographyReducer'
import userReducer from './userReducer'
import managerReducer from './managerReducer'

export default combineReducers({
    ajaxCallsInProgress,
    toastr: toastrReducer,
    geography: geographyReducer,
    user: userReducer,
    manager: managerReducer
})
