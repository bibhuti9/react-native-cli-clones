import * as React from 'react';
import Svg, {SvgProps, Circle, Path, G, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MooonIcon = (props: SvgProps) => (
  <Svg width={85} height={79} fill="none" {...props}>
    <Circle cx={43.37} cy={34.37} r={25.37} fill="#D3D4DE" />
    <Circle cx={34.608} cy={22.666} r={4.657} fill="#C5C6D0" />
    <Circle cx={53.838} cy={34.156} r={6.752} fill="#F1F1F3" />
    <Path
      fill="#C5C6D0"
      fillRule="evenodd"
      d="M62.2 51.373c-3 3.32-6.866 5.843-11.242 7.213A6.752 6.752 0 0 1 62.2 51.373Z"
      clipRule="evenodd"
    />
    <Circle cx={37.627} cy={50.364} r={3.019} fill="#C5C6D0" />
    <G filter="url(#a)">
      <Circle cx={39.37} cy={39.533} r={25.37} fill="#D3D4DE" />
      <Circle cx={30.608} cy={27.828} r={4.657} fill="#C5C6D0" />
      <Circle cx={49.838} cy={39.319} r={6.752} fill="#F1F1F3" />
      <Path
        fill="#C5C6D0"
        fillRule="evenodd"
        d="M58.2 56.536c-3 3.32-6.866 5.843-11.242 7.213A6.752 6.752 0 0 1 58.2 56.536Z"
        clipRule="evenodd"
      />
      <Circle cx={33.627} cy={55.527} r={3.019} fill="#C5C6D0" />
    </G>
    <Circle cx={59.315} cy={28.37} r={25.37} fill="#03174C" />
    <Defs></Defs>
  </Svg>
);
export default MooonIcon;
