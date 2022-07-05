// action - state management
import { CHANGE_FILTERS } from './actions';

// ==============================|| ACCOUNT REDUCER ||============================== //

export interface AccountReducerActionProps {
    type: string;
    payload?: any;
}

const accountReducer = (state = {}, action: AccountReducerActionProps) => {
    switch (action.type) {
        case CHANGE_FILTERS: {
            const { fieldName, value } = action.payload!;
            return {
                ...state,
                [fieldName]: value
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default accountReducer;
