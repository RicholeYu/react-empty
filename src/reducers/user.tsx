export default (state = {
    name: '',
    age: 0
}, action) => {
    switch (action.type) {
    case 'setName':
        state.name = action.name
        break
    case 'setAge':
        state.age = action.age
        break
    default:
        return state
    }
    return { ...state }
}
