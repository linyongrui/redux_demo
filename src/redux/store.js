import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {allRucers} from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(allRucers, composeWithDevTools(applyMiddleware(thunk)))
