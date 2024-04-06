import {Appearance} from 'react-native';

import {createTheme} from '@rneui/themed';
import {Spacing, darkColors} from './colors';

export const currentColorScheme = Appearance.getColorScheme();

export const theme = createTheme({
  lightColors: darkColors,
  mode: 'dark',
  spacing: Spacing,
});
