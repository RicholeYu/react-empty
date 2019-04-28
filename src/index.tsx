import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import Router from './Router'
import reducers from '@/reducers'

let store = createStore(reducers)

ReactDOM.render((
    <Provider store={store}>
        <Router />
    </Provider>
), document.getElementById('root'))
