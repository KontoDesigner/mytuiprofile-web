import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Maintenance from './Maintenance'
import { Provider } from 'react-redux'
import store from './infrastructure/store'
import { runWithAdal } from 'react-adal'
import { authContext } from './infrastructure/adalConfig'
import './styles/site.css'
import 'core-js'

runWithAdal(authContext, () => {
    ReactDOM.render(
        <Provider store={store}>
            {/* <App /> */}
            <Maintenance />
        </Provider>,
        document.getElementById('root')
    )
})
