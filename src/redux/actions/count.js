import { ADD, SUB } from '../constant'

export const add = num => {
    return { type: ADD, num }
}

export const sub = num => ({ type: SUB, num })

export const autoAdd = (num, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add(num))
        }, time);
    }
}