import {View, ImageBackground} from 'react-native';
import React from 'react';
import {makeStyles} from '@rneui/themed';
import {Font, fontSize} from 'src/theme/colors';
import Typography from 'src/components/Typography';
import SolidButton from 'src/components/Buton';

export default function Advertisment() {
  const styles = useStyles();
  return (
    <ImageBackground
      source={require('@assets/image/infoCard.png')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.body}>
        <Typography style={styles.boldText}>The ocean moon</Typography>
        <Typography style={styles.normalText}>
          Non-stop 8- hour mixes of our most popular sleep audio
        </Typography>
        <SolidButton
          title="START"
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </ImageBackground>
  );
}
const useStyles = makeStyles(theme => ({
  container: {
    height: 200,
    marginTop: theme?.spacing?.xl,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: theme?.spacing?.md,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  boldText: {
    fontSize: fontSize.h1,
    marginBottom: theme?.spacing?.lg,
    fontFamily: Font.KaushanScriptRegular,
  },
  normalText: {
    fontSize: fontSize.h5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme?.colors?.white,
    paddingVertical: 10,
    marginTop: theme?.spacing?.md,
  },
  buttonText: {
    color: theme?.colors?.black,
  },
}));
