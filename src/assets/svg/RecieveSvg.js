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
      strokeWidth={1.5}
      d="M27.486 35.24V19M21 28.735l6.475 6.517 6.475-6.517"
    />
  </Svg>
)
export default SvgComponent
