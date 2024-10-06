import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E2D"
      d="M0 21C0 9.402 9.402 0 21 0s21 9.402 21 21-9.402 21-21 21S0 32.598 0 21Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M24.556 20.11 21 23.668l-3.556-3.556M21 13v10.667M29 25.444A3.556 3.556 0 0 1 25.444 29h-8.888A3.556 3.556 0 0 1 13 25.444"
    />
  </Svg>
)
export default SvgComponent
