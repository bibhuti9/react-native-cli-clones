import React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';
import {Route} from 'src/navigation/options';

type RootParamList = {
  // Define the types of your root navigation screens here
};
export const navigationRef =
  React.createRef<NavigationContainerRef<RootParamList>>();
export const currentNavigationRef =
  React.createRef<NavigationContainerRef<RootParamList>>();

interface NavigationProps {
  screenName: any;
  params?;
  checkAuth?: boolean;
}

export function push({screenName, params}: NavigationProps) {
  navigationRef.current?.navigate(screenName, params);
}
export function pop() {
  navigationRef.current?.goBack();
}
export function openDrawer() {
  navigationRef?.current?.dispatch(DrawerActions.openDrawer());
}
export function closeDrawer() {
  navigationRef?.current?.dispatch(DrawerActions.closeDrawer());
}
export function restRoot() {
  // navigationRef.current?.getRootState();
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: Route.BottomTab}],
  });
}
