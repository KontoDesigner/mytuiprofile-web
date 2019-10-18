import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
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

            <h1>We'll be back soon!</h1>

            <p>Sorry for the inconvenience</p>
        </Provider>,
        document.getElementById('root')
    )
})
