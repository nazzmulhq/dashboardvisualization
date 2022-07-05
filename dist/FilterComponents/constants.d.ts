export declare const TEXT = "text";
export declare const NUMBER = "number";
export declare const TIME = "time";
export declare const DATE = "date";
export declare const DATE_RANGE = "date-range";
export declare const DATE_TIME = "date-range";
export declare const RADIO = "radio";
export declare const DROPDOWN = "dropdown";
export declare const DROPDOWN_WITH_CHECKBOX = "dropdown-with-checkbox";
export declare const CHECKBOX = "checkbox";
export declare const FILTER = "filter";
export declare const DASHBOARD_CARDS = "dashboardCards";
export declare const CHART = "chart";
export declare const TABLE = "table";
export declare const BAR_CHART = "bar";
export declare const LINE_CHART = "line";
export declare const PIE_CHART = "pie";
export declare const AREA_CHART = "area";
export declare const MAP_CHART = "map";
export declare const DRAWER = "drawer";
export declare const DEFAULT = "default";
export declare type OptionType = {
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
export declare type CascadingOption = {
    [key: string]: OptionType[];
};
export declare type DataObjectType = {
    [key: string]: any;
};
export declare type FilterSectionType = {
    filtersections: CascadingOption;
    filterOptions: FilterOptionType[];
    dataObject: DataObjectType;
};
export declare type PostType = {
    body: string;
    id: number;
    title: string;
    userid: number;
};
