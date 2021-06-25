export default function countRudcer(pre = 0, action) {

    const { type, num } = action
    switch (type) {
        case 'add':
            return pre + num;
        case 'sub':
            return pre - num;
        default:
            return pre;
    }
}