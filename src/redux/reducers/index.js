import {combineReducers } from 'redux'
import sum from './count'
import persons from './person'

export const allRucers = combineReducers({
    sum,
    persons
})