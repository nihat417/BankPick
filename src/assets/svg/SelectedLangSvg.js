import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path fill="#06F" d="M0 9a9 9 0 1 1 18 0A9 9 0 0 1 0 9Z" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 8.91 2.667 2.908L13 6"
    />
  </Svg>
)
export default SvgComponent
