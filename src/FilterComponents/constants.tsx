export const TEXT = 'text';
export const NUMBER = 'number';
export const TIME = 'time';
export const DATE = 'date';
export const DATE_RANGE = 'date-range';
export const DATE_TIME = 'date-range';
export const RADIO = 'radio';
export const DROPDOWN = 'dropdown';
export const DROPDOWN_WITH_CHECKBOX = 'dropdown-with-checkbox';
export const CHECKBOX = 'checkbox';
export const FILTER = 'filter';
export const DASHBOARD_CARDS = 'dashboardCards';
export const CHART = 'chart';
export const TABLE = 'table';
export const BAR_CHART = 'bar';
export const LINE_CHART = 'line';
export const PIE_CHART = 'pie';
export const AREA_CHART = 'area';
export const MAP_CHART = 'map';
export const DRAWER = 'drawer';
export const DEFAULT = 'default';

export type OptionType = {
    label: string;
    id: number;
    type?: string;
    child?: string;
};
export interface FilterOptionType {
    title: string;
    appearance: string;
    defaultOptions: OptionType[];
    id: string;
    multiple?: boolean;
    changedChildOption?: string;
    url?: string;
    xs: number;
    md: number;
    format?: string;
    mxDate?: string;
    minDate?: string;
    [key: string]: any;
}
export type CascadingOption = {
    [key: string]: OptionType[];
};

export type DataObjectType = {
    [key: string]: any;
};

export type FilterSectionType = {
    filtersections: CascadingOption;
    filterOptions: FilterOptionType[];
    dataObject: DataObjectType;
};

export type PostType = {
    body: string;
    id: number;
    title: string;
    userid: number;
};
