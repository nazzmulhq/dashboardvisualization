// material-ui
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import useUiConfigChangeReducer from '../hooks/useUiConfigChangeReducer';
import { ComponentT } from '../types';
// styles
const IconWrapper = styled('div')({
    position: 'absolute',
    left: '-17px',
    bottom: '-27px',
    color: '#fff',
    transform: 'rotate(25deg)',
    '&> svg': {
        width: '100px',
        height: '100px',
        opacity: '0.35'
    }
});

// =============================|| USER NUM CARD ||============================= //

const DashboardCard = ({ item }: ComponentT) => {
    useUiConfigChangeReducer(item);

    return (
        <>
            {item.title && (
                <Box marginBottom={2}>
                    <CardHeader title={item.title} sx={{ textAlign: item.titlePosition }} />
                    <Divider />
                </Box>
            )}
            <Grid container spacing={2}>
                {item.config.map((card: any, index: number) => (
                    <Grid item xs={card.xs} md={card.md}>
                        <Card sx={{ background: card.color, position: 'relative', color: '#fff' }} key={index}>
                            <CardContent>
                                <IconWrapper>
                                    <EmojiEventsTwoToneIcon />
                                </IconWrapper>
                                <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
                                    <Grid item sm={12}>
                                        <Typography variant="h3" align="center" color="inherit">
                                            {card.value}
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <Typography variant="body1" align="center" color="inherit">
                                            {card.title}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default DashboardCard;
