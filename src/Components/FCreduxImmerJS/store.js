import produce from 'immer'

var redux = require('redux')

const countInitialState = {
    number: 0,
}

const count = (state = countInitialState, action) => {
    produce(state, (draft) => {
        switch (action.type) {
            case "MINUS":
                draft.number = state.number - 1
                break;
            case "PLUS":
                draft.number = state.number + 1
                break;
            default:
                return state
        }
    })
}

var store = redux.createStore(count);
export default store