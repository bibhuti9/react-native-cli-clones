import {Text, TextStyle} from 'react-native';
import React from 'react';
import {makeStyles} from '@rneui/themed';
import {Font} from 'src/theme/colors';

interface PropsTypes {
  children: React.ReactNode;
  style?: TextStyle;
  w?: '400' | '500' | '600' | '700' | '800' | '900';
}

export default function Typography({children, w, style}: PropsTypes) {
  const styles = useStyles({w});
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
}

const useStyles = makeStyles(
  (theme, props: {w?: '400' | '500' | '600' | '700' | '800' | '900'}) => ({
    textStyle: {
      fontFamily: Font.OutFitThin,
      color: theme?.colors?.white,
      fontWeight: props?.w ?? '400',
    },
  }),
);
