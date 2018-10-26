import React from 'react'
import {render} from 'react-dom'
import Webpage from './containers/webpage'
import './assets/css/style.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './store/reducers';

const store = createStore(allReducers)

render(
    <Provider store={store}>
        <Webpage />
    </Provider>, 
    document.getElementById('root')
)
