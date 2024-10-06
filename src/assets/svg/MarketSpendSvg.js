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
      stroke="#E16364"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.909 23.246 15.374 16H28a1 1 0 0 1 .97 1.243l-1.348 5.392a2 2 0 0 1-1.741 1.505l-6.816.682a2 2 0 0 1-2.156-1.576ZM15.374 16l-.65-3H13M26.609 28.267a.366.366 0 1 0 .004.732.366.366 0 0 0-.004-.732ZM18.198 28.267a.363.363 0 0 0-.364.366.366.366 0 1 0 .364-.366Z"
    />
  </Svg>
)
export default SvgComponent
