declare type PathT = {
    id: string;
    name: string;
    title: string | JSX.Element;
    fill: string;
    d: string;
};
declare function Path({ id, name, title, fill, d }: PathT): JSX.Element;
export default Path;
