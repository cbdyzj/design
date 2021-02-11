import { createStore } from 'redux'

const initialState = { count: 7 }

const handlers = {
    increment(state, action) {
        return {
            ...state,
            count: state.count + 1
        }
    },
    decrement(state, action) {
        return {
            ...state,
            count: state.count - 1
        }
    },
}

function reducer(state = initialState, action) {
    const handler = handlers[action.type]
    if (typeof handler !== 'function') {
        return state
    }
    return handler(state, action)
}

export default createStore(reducer)
