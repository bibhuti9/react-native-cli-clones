import {TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import Typography from '../Typography';
import {makeStyles} from '@rneui/themed';

interface PropsTypes {
  onPress?: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function SolidButton({
  onPress,
  title,
  style,
  textStyle,
}: PropsTypes) {
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Typography style={textStyle}>{title}</Typography>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles(theme => ({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: theme?.colors?.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
}));
