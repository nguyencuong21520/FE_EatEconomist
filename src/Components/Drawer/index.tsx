import React, { ReactNode, useContext } from 'react';
import { Drawer as DrawerComponent } from 'antd';
import { StoreContext } from '../../../store/ProviderStore';

const Drawer = () => {
    const store = useContext(StoreContext);
    const storeDrawer = store.drawer;
    return (
        <DrawerComponent
            {...storeDrawer.data}
            onClose={() => {
                storeDrawer.handleDrawer({
                    open: false
                });
            }}
        >
            {storeDrawer.data.children}
        </DrawerComponent>
    )
}

export default Drawer;