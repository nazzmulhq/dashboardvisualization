import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { UI_CONFIG_CHANGE } from '../store/uiConfigChangeReducer';

export default function useUiConfigChangeReducer(item: any = null) {
    const { accordionOpen, serverCall, drawerOpen } = useSelector((state: RootState) => state.uiConfigChange);
    const dispatch = useDispatch();

    // for accordion
    const handleAccordionOpen = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
        dispatch({
            type: UI_CONFIG_CHANGE,
            payload: {
                accordionOpen: newExpanded ? panel : false
            }
        });
    };

    // for drawer
    const handleDrawerOpen = () => {
        dispatch({
            type: UI_CONFIG_CHANGE,
            payload: {
                drawerOpen: true
            }
        });
    };

    const handleDrawerClose = () => {
        dispatch({
            type: UI_CONFIG_CHANGE,
            payload: {
                drawerOpen: false
            }
        });
    };

    // for server call
    const handleServerCall = () => {
        dispatch({
            type: UI_CONFIG_CHANGE,
            payload: {
                serverCall: serverCall + 1
            }
        });
    };

    // for server call with item data
    useEffect(() => {
        (async () => {
            if (serverCall && item?.api) {
                try {
                    await axios.get(item?.api);
                } catch (error) {
                    console.log(error);
                }
            }
        })();
        // eslint-disable-next-line
    }, [serverCall]);

    return { serverCall, accordionOpen, drawerOpen, handleServerCall, handleAccordionOpen, handleDrawerOpen, handleDrawerClose };
}
