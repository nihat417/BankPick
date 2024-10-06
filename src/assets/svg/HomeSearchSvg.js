import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Circle cx={21} cy={21} r={21} fill="#1E1E2D" />
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)"
    >
      <Path d="M24.095 16.699a5.23 5.23 0 1 1-7.397 7.396 5.23 5.23 0 0 1 7.397-7.396ZM26.834 26.833l-2.742-2.741" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M11 11h20v20H11z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
