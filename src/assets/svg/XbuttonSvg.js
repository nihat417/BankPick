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
      fill="#fff"
      d="M15.293 15.293a1 1 0 0 1 1.414 0L21 19.586l4.293-4.293a1 1 0 0 1 1.414 1.414L22.414 21l4.293 4.293a1 1 0 0 1-1.414 1.414L21 22.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L19.586 21l-4.293-4.293a1 1 0 0 1 0-1.414Z"
    />
  </Svg>
)
export default SvgComponent
