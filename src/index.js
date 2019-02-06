import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import App from './Components/App'

import reducers from './Reducers'

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App />
    </Provider>
, document.getElementById("root"))
