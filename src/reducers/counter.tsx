export default (state = {
    count: 0
}, action) => {
    switch (action.type) {
    case 'add':
        state.count++
        break
    case 'del':
        state.count--
        break
    default:
        return state
    }
}
