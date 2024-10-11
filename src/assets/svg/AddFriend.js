import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={23.5} fill="#242433" stroke="#06F" />
    <Path
      stroke="#06F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M24 16v16M32 24H16"
    />
  </Svg>
)
export default SvgComponent
