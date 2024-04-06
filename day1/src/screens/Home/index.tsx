import {ImageBackground, ScrollView, View} from 'react-native';
import React from 'react';
import {useStyle} from './styles';
import Typography from 'src/components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CategoryList from './Components/Category';
import Advertisment from './Components/Advertisment';
import Related from './Components/Related';

export default function Home() {
  const {top} = useSafeAreaInsets();
  const styles = useStyle({top});
  return (
    <ScrollView bounces={false}>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/image/sleep.png')}>
        <View style={styles.textContainer}>
          <Typography style={styles.boldText}>Sleep Stories</Typography>
          <Typography style={styles.normalText}>
            Soothing bedtime stories to help you fall into a deep and natural
            sleep
          </Typography>
        </View>
        <CategoryList />
        <Advertisment />
        <Related />
      </ImageBackground>
    </ScrollView>
  );
}
