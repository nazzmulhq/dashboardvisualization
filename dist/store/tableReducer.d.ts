export declare const TABLE_PAGINATION = "@TABLE/PAGINATION";
declare type TablePaginationT = typeof TABLE_PAGINATION;
interface TablePaginationPayloadI {
    rowsPerPage?: number;
    pageSize?: number;
    count?: number;
    search?: string;
}
export interface TablePaginationActionPropsI {
    type: TablePaginationT;
    payload: TablePaginationPayloadI;
}
declare const tableReducer: (state: TablePaginationPayloadI | undefined, action: TablePaginationActionPropsI) => {
    rowsPerPage?: number | undefined;
    pageSize?: number | undefined;
    count?: number | undefined;
    search?: string | undefined;
};
export default tableReducer;
