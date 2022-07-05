import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Box, Card, IconButton, Typography } from '@mui/material';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { PathT } from '../../types';
import { districts, divisions, useStyle } from '../constant';
import Path from './Path';
export default function Map({ config }: any) {
    const classes = useStyle();
    const [mapOfDivision, setMapOfDivision] = useState<PathT[]>(config ? config.divisions : divisions);
    const [mapOfDistrict, setMapOfDistrict] = useState<PathT[]>(config ? config.districts : districts);

    const divisionPath = mapOfDivision.map((path) => {
        return (
            <Path
                key={path.id}
                id={path.id}
                fill="gray"
                name={_.capitalize(path.id)}
                title={
                    <>
                        <Box display="flex">
                            <Typography variant="subtitle2" color="white">
                                {`${_.capitalize(path.id)} Value: ${_.capitalize(path?.value.toString())}`}
                            </Typography>
                        </Box>
                    </>
                }
                d={path.d}
            />
        );
    });

    const districtsPath = mapOfDistrict.map((path) => {
        return (
            <Path
                key={path.id}
                id={path.id}
                fill="gray"
                name={_.capitalize(path.id)}
                title={
                    <>
                        <Box display="flex">
                            <Typography variant="subtitle2" color="white">
                                {`${_.capitalize(path.id)} Value: ${_.capitalize(path?.value.toString())}`}
                            </Typography>
                        </Box>
                    </>
                }
                d={path.d}
            />
        );
    });

    useEffect(() => {
        setMapOfDivision(config.divisions);
        setMapOfDistrict(config.districts);
    }, [config]);

    return (
        <TransformWrapper initialScale={0.9} minScale={0.5} maxScale={4} initialPositionX={120} initialPositionY={120}>
            {({ zoomIn, zoomOut, resetTransform, state }) => (
                <>
                    <Card>
                        <Box sx={{ backgroundColor: '#892910' }}>
                            <IconButton size="large" onClick={() => zoomIn()}>
                                <AddIcon fontSize="small" sx={{ color: '#faeee7' }} />
                            </IconButton>
                            <IconButton size="large" onClick={() => zoomOut()}>
                                <RemoveIcon fontSize="small" sx={{ color: '#faeee7' }} />
                            </IconButton>
                            <IconButton size="large" onClick={() => resetTransform()}>
                                <RestartAltIcon fontSize="small" sx={{ color: '#faeee7' }} />
                            </IconButton>
                        </Box>

                        <TransformComponent>
                            <Box height="75vh" width="100vw">
                                <svg
                                    id="map"
                                    className={classes.svg}
                                    baseProfile="tiny"
                                    fill="#7c7c7c"
                                    stroke="#ffffff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    version="1.2"
                                    viewBox="0 0 3722.2117757783362 2791.658831833752"
                                    height="100%"
                                    width="100%"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {state.scale >= 1 ? districtsPath : divisionPath}
                                </svg>
                            </Box>
                        </TransformComponent>
                    </Card>
                </>
            )}
        </TransformWrapper>
    );
}
