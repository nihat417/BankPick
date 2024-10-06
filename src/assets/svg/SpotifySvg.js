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
      fill="#1FAA47"
      d="M26.803 16.197a7.5 7.5 0 1 1-10.606 10.606 7.5 7.5 0 0 1 10.606-10.606Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.008 19.114c3.19-.945 7.355-.291 9.296.936M17.39 21.545c2.811-.876 6.13-.248 7.966.932M17.605 23.797c3.127-.702 5.299-.21 6.94.776"
    />
  </Svg>
)
export default SvgComponent

