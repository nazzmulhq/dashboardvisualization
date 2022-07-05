import { Tooltip } from '@mui/material';
import React from 'react';
type PathT = {
    id: string;
    name: string;
    title: string | JSX.Element;
    fill: string;
    d: string;
};
function Path({ id, name, title, fill, d }: PathT) {
    return (
        <Tooltip title={title} placement="top" arrow followCursor>
            <path onClick={() => console.log(name)} className="path" id={id} name={name} fill={fill} d={d} />
        </Tooltip>
    );
}
export default Path;
