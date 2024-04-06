import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const FavoriteIcon = (props: SvgProps) => (
  <Svg width={29} height={25} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#E6E7F2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25.309 3.356c-2.63-2.765-6.884-2.765-9.513 0l-.208.219c-.599.63-1.577.63-2.188 0C11.113 1.157 7.445.54 4.743 2.443 1.099 5.028.745 10.263 3.69 13.361l1.296 1.364 7.85 8.256a2.259 2.259 0 0 0 3.314 0L24 14.725l1.296-1.364c2.64-2.764 2.64-7.24.012-10.005Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h28v25H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FavoriteIcon;
