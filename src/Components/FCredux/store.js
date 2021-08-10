var redux = require('redux')

const countInitialState = {
    number: 0,
}

const count = (state = countInitialState, action) => {
    switch (action.type) {

        case "MINUS":
            return { ...state, number: state.number - 1 }
        case "PLUS":
            return { ...state, number: state.number + 1 }

        default:
            return state
    }
}

var store = redux.createStore(count);
export default store

