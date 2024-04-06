import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'src/utils/navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {Route, screenOptions} from 'src/navigation/options';
import SplashScreen from 'src/screens/Splash';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function NavigatorContainer(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Route.SpeelScreen} component={SplashScreen} />
        <Stack.Screen name={Route.BottomTab} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
