import {Dimensions} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('screen');

export const ASPECT_RATIO = width / 360;
export const WIDTH = width;
export const HEIGHT = height;

export enum Font {
  'LatoRegular' = 'Lato-Regular',
  'PoppinsRegular' = 'Poppins-Regular',
  'NotoSerifExtraCondensedRegular' = 'NotoSerif_ExtraCondensed-Regular',
  'KaushanScriptRegular' = 'KaushanScript-Regular',
  'OutFitRegular' = 'Outfit-Regular',
  'OutFitThin' = 'Outfit-Thin',
}

export interface ColorType {
  primary: string;
  primaryDark?: string;
  primaryLight?: string;
  primaryLight2?: string;
  secondary: string;
  gray: string;
  grey0: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey5: string;
  greyLight: string;
  greyOutline: string;
  disabled: string;
  divider: string;
  searchBg: string;
  black: string;
  white: string;
}

const baseColors = {
  primary: '#8E97FD',
  secondary: '#586894',
  success: '#4DB740', //70C04F
  error: '#D53D32', //FF0000
  warning: '#EC8A00',
  grey: '#F5F9FF',
  searchBg: '#9B9B9B',
};

export const lightColors = {
  ...baseColors,
  primary: '#8E97FD',
  secondary: '#586894',
  gray: '#98A1BD',
  grey1: '#53587A',
  grey2: '#E6E7F2',
  disabled: '#9B9B9B',
  divider: '#9B9B9B',
  searchBg: '#9B9B9B',
  black: '#000',
  white: '#fff',
  platform: {
    android: baseColors,
    ios: baseColors,
    web: baseColors,
    default: baseColors,
  },
};

export const Spacing = {
  s: 4 * ASPECT_RATIO,
  md: 16 * ASPECT_RATIO,
  lg: 18 * ASPECT_RATIO,
  xl: 32 * ASPECT_RATIO,
  xxl: 60 * ASPECT_RATIO,
};

export const fontSize = {
  h1: 32 * ASPECT_RATIO,
  h2: 24 * ASPECT_RATIO,
  h3: 20 * ASPECT_RATIO,
  h4: 18 * ASPECT_RATIO,
  h5: 16 * ASPECT_RATIO,
  h6: 14 * ASPECT_RATIO,
  body1: 16 * ASPECT_RATIO,
  body2: 14 * ASPECT_RATIO,
  body3: 12 * ASPECT_RATIO,
};

export type ThemeProps = {insets: EdgeInsets};
