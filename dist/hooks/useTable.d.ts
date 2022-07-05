export default function useTables(): {
    count: number | undefined;
    pageSize: number | undefined;
    rowsPerPage: number | undefined;
    search: string | undefined;
    handleChangePage: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
