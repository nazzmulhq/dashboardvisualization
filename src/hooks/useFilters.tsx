import { useDispatch, useSelector } from 'react-redux';
import { FilterOptionType } from '../FilterComponents/constants';
import { CHANGE_FILTERS } from '../store/actions';

export default function useFilters(prop: FilterOptionType) {
    const filters = useSelector((state: any) => state.filters);
    const dispatch = useDispatch();
    const handleChange = (value: any) => {
        dispatch({
            type: CHANGE_FILTERS,
            payload: {
                fieldName: prop.title,
                value
            }
        });
    };

    return { filters, handleChange };
}
