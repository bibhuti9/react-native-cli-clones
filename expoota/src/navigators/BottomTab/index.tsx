import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route, screenOptions} from 'src/navigation/options';
import Home from 'src/screens/Home';
import SleepScreen from 'src/screens/Sleep';
import MeditateScreen from 'src/screens/Meditate';
import MusicScreen from 'src/screens/Music';
import UserScreen from 'src/screens/User';
import {useStyles} from './styles';
function MyTabBar({state, descriptors, navigation}) {
  const inset = useSafeAreaInsets();
  const {theme} = useTheme();
  const styles = useStyles();
  return <View style={styles.container}></View>;
}

const BottomStack = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <BottomStack.Navigator
      screenOptions={screenOptions}
      tabBar={props => <MyTabBar {...props} />}>
      <BottomStack.Screen name={Route.HomeScren} component={Home} />
      <BottomStack.Screen name={Route.SpeelScreen} component={SleepScreen} />
      <BottomStack.Screen
        name={Route.MeditateScreen}
        component={MeditateScreen}
      />
      <BottomStack.Screen name={Route.MusicScreen} component={MusicScreen} />
      <BottomStack.Screen name={Route.UserScreen} component={UserScreen} />
    </BottomStack.Navigator>
  );
}
