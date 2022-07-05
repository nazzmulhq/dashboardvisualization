declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
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
}>, import("./filterReducer").AccountReducerActionProps | import("./tableReducer").TablePaginationActionPropsI | import("./uiConfigChangeReducer").UiConfigChangeReducerActionPropsI>;
export declare type RootState = ReturnType<typeof reducer>;
export default reducer;
