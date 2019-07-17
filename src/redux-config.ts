import { createStore } from 'redux'

function counter(state, action) {
    if (typeof state === 'undefined') {
        state = { count: 0 }
    }
    if (action.type === 'INCREMENT') {
        return { count: state.count + 1 }
    }
    if (action.type === 'DECREMENT') {
        return { count: state.count - 1 }
    }
    return state
}

const initialState = { count: 100 }

export const store = createStore(counter, initialState)
