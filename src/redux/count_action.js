import { ADD, SUB } from './constant'

export const createAddAction = num => {
    return { type: ADD, num }
}

export const createSubAction = num => ({ type: SUB, num })