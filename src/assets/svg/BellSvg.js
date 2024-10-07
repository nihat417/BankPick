import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Circle cx={21} cy={21} r={21} fill="#1E1E2D" />
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)"
    >
      <Path d="M18.899 26.815v.335a2.1 2.1 0 0 0 4.202-.001v-.335M22.68 15.272v-.842a1.68 1.68 0 1 0-3.36 0v.842" />
      <Path d="M16.016 19.339a4.153 4.153 0 0 1 4.153-4.153h1.662a4.153 4.153 0 0 1 4.154 4.153v2.564c0 .486.193.952.537 1.296l.587.588c.344.343.538.81.538 1.296 0 .957-.776 1.732-1.733 1.732h-9.828a1.732 1.732 0 0 1-1.732-1.732c0-.486.193-.953.537-1.296l.588-.588c.344-.344.537-.81.537-1.296v-2.564Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 10h22v22H10z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
