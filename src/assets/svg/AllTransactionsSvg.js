import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Circle cx={21} cy={21} r={21} fill="#1E1E2D" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m27.178 18.822 2.317 1.29 1.29-2.317"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M14.636 21.227a7.503 7.503 0 0 1 14.573-2.5M22.136 28.727a7.5 7.5 0 0 1-7.5-7.5M28.279 25.523a7.485 7.485 0 0 1-6.143 3.204"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m24.746 23.393-3.043-1.811v-3.928"
    />
  </Svg>
)
export default SvgComponent
