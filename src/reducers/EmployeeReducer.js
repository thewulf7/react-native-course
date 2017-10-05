import { EMPLOYEE_FETCH_SUCCESS  } from '../actions/types';

const INITIAL_STATE = {
    name: "",
    phone: "",
    shift: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload; 
        default:
            return state;
    }
};