import { combineReducers } from 'redux';
import employReducer from './Employ/employeReucer';


const rootReducer = combineReducers({
    employ: employReducer
});

const rootReducerMain = (state, action) => {
    // when a RESET_GLOBAL_STATE action type is dispatched it will reset redux state
    if (action.type === 'RESET_GLOBAL_STATE') {
        state = undefined;
    }

    return rootReducer(state, action);
};

export default rootReducerMain;