import { combineReducers } from 'redux';

// reducer import
import filterReducer from './filterReducer';
import tableReducer from './tableReducer';
import uiConfigChangeReducer from './uiConfigChangeReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    filters: filterReducer,
    table: tableReducer,
    uiConfigChange: uiConfigChangeReducer
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
