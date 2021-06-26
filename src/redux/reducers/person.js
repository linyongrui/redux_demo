import { ADD_PERSON } from '../constant'

const initData = [{ id: "001", name: "Tom", age: 12 }]
// const initData = { id: "001", name: "Tom", age: 12 }

export default function personReducer(pre = initData, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...pre]
        default:
            return pre;
    }
}