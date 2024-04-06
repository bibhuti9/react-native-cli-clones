import {ImageBackground, View} from 'react-native';
import React from 'react';
import {useStyles} from './styles';
import Typography from 'src/components/Typography';
import BirdIcon from '@assets/svg/BirdIcon';
import SolidButton from 'src/components/Buton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {push} from 'src/utils/navigation';
import {Route} from 'src/navigation/options';

export default function SplashScreen() {
  const {bottom} = useSafeAreaInsets();
  const styles = useStyles({bottom});
  const onPress = () => {
    push({screenName: Route.BottomTab});
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/image/splashBackground.png')}>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Typography style={styles.boldText}>Wecome to Sleep</Typography>
          <Typography style={styles.normalText}>
            Explore the new king of sleep. It uses sound and vesualization to
            create perfect conditions for refreshing sleep.
          </Typography>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <BirdIcon />
        </View>
      </View>
      <SolidButton
        title="GET STARTED"
        style={styles.button}
        onPress={onPress}
      />
    </ImageBackground>
  );
}
