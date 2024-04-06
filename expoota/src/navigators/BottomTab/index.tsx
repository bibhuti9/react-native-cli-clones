import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabs, Route, screenOptions} from 'src/navigation/options';
import Home from 'src/screens/Home';
import SleepScreen from 'src/screens/Sleep';
import MeditateScreen from 'src/screens/Meditate';
import MusicScreen from 'src/screens/Music';
import UserScreen from 'src/screens/User';
import {useStyles} from './styles';
import Typography from 'src/components/Typography';
import {push} from 'src/utils/navigation';
function MyTabBar({state, descriptors, navigation}) {
  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const item = BottomTabs[route.name];
        const Icon = item.icon;
        const isFocused = state.index === index;
        const buttonStyle = isFocused
          ? styles.selectedIcon
          : styles.iconContainer;
        const iconColor = isFocused
          ? theme?.colors?.white
          : theme?.colors?.grey2;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            push({
              screenName: route.name,
            });
          }
        };
        return (
          <TouchableOpacity
            key={item.id}
            onPress={onPress}
            style={styles.button}>
            <View style={buttonStyle}>
              <Icon color={iconColor} />
            </View>
            <Typography style={styles.buttonText}>{item.name}</Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
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
