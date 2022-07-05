import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { TABLE_PAGINATION } from '../store/tableReducer';

export default function useTables() {
    const { count, pageSize, rowsPerPage, search } = useSelector((state: RootState) => state.table);
    const dispatch = useDispatch();

    const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        dispatch({
            type: TABLE_PAGINATION,
            payload: {
                pageSize: newPage
            }
        });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
        event?.target.value &&
            dispatch({
                type: TABLE_PAGINATION,
                payload: {
                    rowsPerPage: parseInt(event?.target.value, 10)
                }
            });

        dispatch({
            type: TABLE_PAGINATION,
            payload: {
                pageSize: 0
            }
        });
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: TABLE_PAGINATION,
            payload: {
                search: event.target.value
            }
        });
    };

    return { count, pageSize, rowsPerPage, search, handleChangePage, handleChangeRowsPerPage, handleSearch };
}
