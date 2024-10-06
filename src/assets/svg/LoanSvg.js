import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E2D"
      d="M0 27C0 12.088 12.088 0 27 0s27 12.088 27 27-12.088 27-27 27S0 41.912 0 27Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M27 21v1.5M27 33v-1.5M29.984 24.6a2.243 2.243 0 0 0-2.234-2.1h-1.644a2.106 2.106 0 0 0-.512 4.15l2.811.705a2.106 2.106 0 0 1-.512 4.15h-1.644a2.244 2.244 0 0 1-2.236-2.105"
    />
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M15.75 27c0-6.213 5.037-11.25 11.25-11.25S38.25 20.787 38.25 27 33.213 38.25 27 38.25 15.75 33.213 15.75 27Z"
    />
  </Svg>
)
export default SvgComponent
