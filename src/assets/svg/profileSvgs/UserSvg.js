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
      <Path d="M16.834 5.166A8.25 8.25 0 1 1 5.166 16.834 8.25 8.25 0 0 1 16.834 5.166Z" />
      <Path d="M12.823 7.63a2.579 2.579 0 1 1-3.646 3.647 2.579 2.579 0 0 1 3.646-3.647ZM16.231 17.378A7.194 7.194 0 0 0 11 15.125c-2.06 0-3.916.868-5.231 2.254" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
