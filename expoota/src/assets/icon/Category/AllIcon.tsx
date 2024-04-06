import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const AllIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <G fill="#E6E7F2" clipPath="url(#a)">
      <Path d="M22.788 14.101a.46.46 0 0 1 .456.462v2.064a.46.46 0 0 1-.456.463h-6.73a.46.46 0 0 1-.456-.463v-2.063a.46.46 0 0 1 .456-.463h6.73Zm0-1.779h-6.73c-1.217 0-2.212 1.008-2.212 2.242v2.063c0 1.233.995 2.242 2.212 2.242h6.73c1.217 0 2.212-1.009 2.212-2.242v-2.063c0-1.234-.995-2.242-2.212-2.242ZM16.819 1.779a.46.46 0 0 1 .456.462v6.82a.46.46 0 0 1-.456.462h-2.037a.46.46 0 0 1-.456-.462V2.24a.46.46 0 0 1 .456-.462h2.037Zm0-1.779h-2.037c-1.217 0-2.212 1.008-2.212 2.241v6.82c0 1.233.995 2.241 2.212 2.241h2.037c1.217 0 2.212-1.008 2.212-2.241V2.24C19.03 1.008 18.048 0 16.819 0ZM10.545 15.477a.46.46 0 0 1 .457.462v6.82a.46.46 0 0 1-.457.462H8.51a.46.46 0 0 1-.457-.462v-6.82a.46.46 0 0 1 .457-.462h2.036Zm0-1.78H8.51c-1.217 0-2.212 1.009-2.212 2.242v6.82c0 1.233.995 2.24 2.212 2.24h2.036c1.218 0 2.212-1.007 2.212-2.24v-6.82c0-1.233-.994-2.241-2.212-2.241ZM8.942 8.017a.46.46 0 0 1 .456.463v2.075a.46.46 0 0 1-.456.462h-6.73a.46.46 0 0 1-.456-.462V8.48a.46.46 0 0 1 .456-.463h6.73Zm0-1.779h-6.73C.995 6.238 0 7.246 0 8.479v2.076c0 1.233.995 2.241 2.212 2.241h6.73c1.217 0 2.212-1.008 2.212-2.241V8.48c0-1.234-.995-2.242-2.212-2.242Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AllIcon;