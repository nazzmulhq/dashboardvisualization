export const TABLE_PAGINATION = '@TABLE/PAGINATION';

type TablePaginationT = typeof TABLE_PAGINATION;

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

const initialState: TablePaginationPayloadI = {
    rowsPerPage: 10,
    pageSize: 0,
    count: 30,
    search: ''
};

const tableReducer = (state = initialState, action: TablePaginationActionPropsI) => {
    switch (action.type) {
        case TABLE_PAGINATION: {
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

export default tableReducer;
