import {Appearance} from 'react-native';

import {createTheme} from '@rneui/themed';
import {Spacing, lightColors} from './colors';

export const currentColorScheme = Appearance.getColorScheme();

export const theme = createTheme({
  lightColors: lightColors,
  darkColors: lightColors,
  mode: 'light',
  spacing: Spacing,
});
