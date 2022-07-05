import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import useUiConfigChangeReducer from '../hooks/useUiConfigChangeReducer';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
}));

export default function PersistentDrawer({ title, children }: { title: string; children: React.ReactNode }) {
    const theme = useTheme();
    const { drawerOpen, handleDrawerOpen, handleDrawerClose } = useUiConfigChangeReducer();

    return (
        <Box marginBottom={2}>
            <Box sx={{ display: 'flex', justifyContent: 'end' }} textTransform={'capitalize'}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleDrawerOpen}
                    sx={{ ...(drawerOpen && { visibility: 'hidden' }) }}
                >
                    <FilterAltIcon /> {title}
                </Button>
            </Box>

            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxShadow: '-5px 0 5px -5px #333'
                    }
                }}
                variant="persistent"
                anchor="right"
                open={drawerOpen}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Container>{children}</Container>
            </Drawer>
        </Box>
    );
}
