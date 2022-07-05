import { CardHeader, Divider } from '@mui/material';
import React from 'react';
import { ComponentT } from '../types';
import Map from './Map/index';

export default function Maps({ item }: ComponentT) {
    return (
        <>
            {item.title && (
                <>
                    <CardHeader title={item.title} sx={{ textAlign: item.titlePosition }} />
                    <Divider />
                </>
            )}
            <Map {...item} />
        </>
    );
}
