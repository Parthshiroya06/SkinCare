import React, { useEffect, useState } from 'react';
import BottomNavigation from './BottomNavigation';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu-updated'
import { useSelector, useDispatch } from 'react-redux';
import { closeDrawer } from '../redux/actions/drawerAction';
import Sidebar from '../layout/Sidebar';

function DrawerNavigation() {

    const { isOpen }  = useSelector((state) => state.drawer);

	const dispatch = useDispatch();

    
    return (
        <View
            style={{
                flex:1,
            }}
        >
            {/* <BottomNavigation/> */}
            <SideMenu
                overlayColor={'rgba(13,16,16,.8)'}
                isOpen={isOpen}
                menu={<Sidebar/>}
                onChange={(e)=> {(e === false) ? dispatch(closeDrawer()) : null}}
            >
                <BottomNavigation/>
            </SideMenu>
        </View>
    );
}

export default DrawerNavigation;