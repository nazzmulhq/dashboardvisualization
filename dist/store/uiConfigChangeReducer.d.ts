export declare const UI_CONFIG_CHANGE = "@UI_CONFIG/CHANGE";
declare type UiConfigChangeT = typeof UI_CONFIG_CHANGE;
interface UiConfigChangePayloadI {
    accordionOpen: boolean | string;
    serverCall: number;
    drawerOpen: boolean;
}
export interface UiConfigChangeReducerActionPropsI {
    type: UiConfigChangeT;
    payload: UiConfigChangePayloadI;
}
declare const uiConfigChangeReducer: (state: UiConfigChangePayloadI | undefined, action: UiConfigChangeReducerActionPropsI) => {
    accordionOpen: boolean | string;
    serverCall: number;
    drawerOpen: boolean;
};
export default uiConfigChangeReducer;
