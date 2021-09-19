import * as Actions from '../actions';
const initialState = {
    updateRounds:[]
};
export default function stateContent(state = initialState, action = {}) {
    switch (action.type) {
        case Actions.UpdateRounds:
            return {
                ...state,
                updateRounds:[...state.updateRounds,action.payload]
            }
    }
    return state
}