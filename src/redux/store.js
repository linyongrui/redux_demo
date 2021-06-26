import { createStore, applyMiddleware } from 'redux'
import countRudcer from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(countRudcer, applyMiddleware(thunk))
