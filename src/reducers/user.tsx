
interface action {
    type: string,
    age: number,
    name: string
}

export default (state = {
    name: '',
    age: 0
}, action: action) => {
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
