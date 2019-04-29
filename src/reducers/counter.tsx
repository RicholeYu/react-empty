interface action {
    type: string,
    count: number,
}
export default (state = { count: 0 }, action: action) => {
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
    return state
}
