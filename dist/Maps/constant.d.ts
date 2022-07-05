export declare const initialDate: {
    year: {
        id: number;
        title: string;
    };
    month: {
        id: number;
        title: string;
    };
};
export declare const initialMap: {
    gender: {
        id: number;
        title: string;
    };
    user_type: {
        id: number;
        title: string;
    };
    animal_type: {
        id: number;
        title: string;
    };
    source: {
        id: number;
        title: string;
    };
};
export declare const useStyle: (props?: any) => Record<"map" | "svg", string>;
export declare const divisions: {
    id: string;
    geo_code: string;
    value: number;
    d: string;
}[];
export declare const districts: {
    id: string;
    geo_code: string;
    value: number;
    d: string;
}[];
