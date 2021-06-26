import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countRudcer from './reducers/count'
import personRudcer from './reducers/person'


const allRucers = combineReducers({
    sum: countRudcer,
    persons: personRudcer
})
export default createStore(allRucers, applyMiddleware(thunk))
