import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import RootReducer from '../reducers/rootReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

var logger = createLogger({
    collapsed: true
})

const middleware =
    process.env.NODE_ENV !== 'production'
        ? //Local
          [reduxImmutableStateInvariant(), thunk, logger]
        : //Production
          [thunk]

var store = createStore(RootReducer, applyMiddleware(...middleware))

export default store
