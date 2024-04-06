import HomeIcon from '@assets/icon/HomeIcon';
import MeditateIcon from '@assets/icon/MeditateIcon';
import MusicIcon from '@assets/icon/MusicIcon';
import SleepIcon from '@assets/icon/SleepIcon';
import UserIcon from '@assets/icon/UserIcon';

export enum Route {
  SplashScreen = 'SplashScreen',
  BottomTab = 'BottomTab',
  HomeScren = 'HomeScren',
  SpeelScreen = 'SpeelScreen',
  MeditateScreen = 'MeditateScreen',
  MusicScreen = 'MusicScreen',
  UserScreen = 'UserScreen',
}

export const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#586894',
  },
};

export const BottomTabs = {
  [Route.HomeScren]: {
    id: Route.HomeScren,
    name: 'Home',
    icon: HomeIcon,
  },
  [Route.SpeelScreen]: {
    id: Route.SpeelScreen,
    name: 'Sleep',
    icon: SleepIcon,
  },
  [Route.MeditateScreen]: {
    id: Route.MeditateScreen,
    name: 'Meditate',
    icon: MeditateIcon,
  },
  [Route.MusicScreen]: {
    id: Route.MusicScreen,
    name: 'Music',
    icon: MusicIcon,
  },
  [Route.UserScreen]: {
    id: Route.UserScreen,
    name: 'User',
    icon: UserIcon,
  },
};
