export const UI_CONFIG_CHANGE = '@UI_CONFIG/CHANGE';

type UiConfigChangeT = typeof UI_CONFIG_CHANGE;

interface UiConfigChangePayloadI {
    accordionOpen: boolean | string;
    serverCall: number;
    drawerOpen: boolean;
}

export interface UiConfigChangeReducerActionPropsI {
    type: UiConfigChangeT;
    payload: UiConfigChangePayloadI;
}

const initialState: UiConfigChangePayloadI = {
    accordionOpen: 'filter',
    serverCall: 0,
    drawerOpen: false
};

const uiConfigChangeReducer = (state = initialState, action: UiConfigChangeReducerActionPropsI) => {
    switch (action.type) {
        case UI_CONFIG_CHANGE: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default uiConfigChangeReducer;
