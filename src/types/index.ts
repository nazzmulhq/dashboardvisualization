import { Props as ChartProps } from 'react-apexcharts';
export type VisualizationT = {
    title?: string;
    titlePosition?: 'left' | 'center' | 'right';
    api?: string;
    type: string;
    appearance?: 'default' | 'drawer';
    xs: number;
    md: number;
    bgColorForChart?: string;
    textColorForChart?: string;
    paginationForTable?: {
        pageSize: number;
        rowsPerPage: number;
        count: number;
    };

    config: ChartProps | any[] | any;
};

export type ChartPropsT = {
    chartData: VisualizationT;
};

export type ComponentT = { item: VisualizationT };

export type OptionT = {
    label: string;
    id: number;
    type: string;
    child: string;
};

export type FilterOptionsT = {
    title: string;
    appearance: string;
    defaultOptions: OptionT[];
    id: string;
    multiple: boolean;
    changedChildOption: string;
    url: string;
    xs: number;
    md: number;
    required: boolean;
    format?: string;
    mxDate?: string;
    minDate?: string;
};

export type FilterSectionT = {
    item: VisualizationT;
    dataObject: Object;
};

export type PathT = {
    id: string;
    geo_code: string;
    value: number;
    d: string;
};
