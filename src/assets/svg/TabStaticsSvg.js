import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ color = "#8B8B94", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 4a7.5 7.5 0 1 0 7.5 7.5H8.5V4Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 8a7 7 0 0 0-7-7v7h7Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
