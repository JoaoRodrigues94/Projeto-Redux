import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function (state, action) {
        switch (action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
                break;

            case 'NUM_MAX_ALTERADO':
                return{
                    ...state,
                    max: action.payload
                }
                break;

            default:
                return {
                    min: 5,
                    max: 35
                }
                break;
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;