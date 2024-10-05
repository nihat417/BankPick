import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G
      stroke="#A2A2A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)"
    >
      <Path d="m6.874 8.937 2.682 1.654a2.751 2.751 0 0 0 2.888 0l2.683-1.654" />
      <Path d="M2.747 7.58a3 3 0 0 1 3-3h10.506a3 3 0 0 1 3 3v6.84a3 3 0 0 1-3 3H5.747a3 3 0 0 1-3-3V7.58Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
