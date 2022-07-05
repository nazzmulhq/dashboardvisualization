import { FilterOptionType } from '../FilterComponents/constants';
export default function useFilters(prop: FilterOptionType): {
    filters: any;
    handleChange: (value: any) => void;
};
