import produce from 'immer';
import {
    SET_EMPLOY
} from './employConstant';

export const initialState = {
    employ: { data: {} },


};

/* eslint-disable default-case, no-param-reassign */
const employReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case SET_EMPLOY:
                draft.employ = {
                    ...draft.employ,
                    ...action.data,

                };
                break;
        }
    });

export default employReducer;
