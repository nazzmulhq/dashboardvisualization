/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
declare const store: import("redux").Store<import("redux").CombinedState<{
    filters: {};
    table: {
        rowsPerPage?: number | undefined;
        pageSize?: number | undefined;
        count?: number | undefined;
        search?: string | undefined;
    };
    uiConfigChange: {
        accordionOpen: string | boolean;
        serverCall: number;
        drawerOpen: boolean;
    };
}>, import("./filterReducer").AccountReducerActionProps | import("./tableReducer").TablePaginationActionPropsI | import("./uiConfigChangeReducer").UiConfigChangeReducerActionPropsI> & {
    dispatch: unknown;
};
declare const persister: import("redux-persist").Persistor;
export { store, persister };
