import { ADD, SUB } from '../constant'

export default function countRudcer(pre = 0, action) {

    const { type, num } = action
    switch (type) {
        case ADD:
            return pre + num;
        case SUB:
            return pre - num;
        default:
            return pre;
    }
}