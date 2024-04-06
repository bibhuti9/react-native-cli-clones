import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const SadIcon = (props: SvgProps) => (
  <Svg width={26} height={25} fill="none" {...props}>
    <G
      stroke="#E6E7F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)">
      <Path
        strokeWidth={2}
        d="M13.25 23.864c6.276 0 11.364-5.088 11.364-11.364 0-6.276-5.088-11.364-11.364-11.364-6.276 0-11.364 5.088-11.364 11.364 0 6.276 5.088 11.364 11.364 11.364Z"
      />
      <Path
        strokeWidth={2}
        d="M17.796 17.045s-1.705-2.272-4.546-2.272c-2.84 0-4.545 2.272-4.545 2.272"
      />
      <Path strokeWidth={3} d="M9.84 9.09h.012M16.66 9.09h.01" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.75 0h25v25h-25z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SadIcon;
