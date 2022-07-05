export default function useUiConfigChangeReducer(item?: any): {
    serverCall: number;
    accordionOpen: string | boolean;
    drawerOpen: boolean;
    handleServerCall: () => void;
    handleAccordionOpen: (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => void;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
};
