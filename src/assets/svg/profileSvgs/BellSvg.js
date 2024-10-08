import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G
      stroke="#A2A2A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      clipPath="url(#a)"
    >
      <Path d="M8.9 16.815v.335a2.1 2.1 0 0 0 4.201-.001v-.335M12.68 5.272V4.43a1.68 1.68 0 1 0-3.36 0v.842" />
      <Path d="M6.016 9.339a4.153 4.153 0 0 1 4.154-4.153h1.662a4.153 4.153 0 0 1 4.153 4.153v2.564c0 .486.193.952.537 1.296l.588.588c.343.343.537.81.537 1.296 0 .957-.776 1.732-1.733 1.732H6.087a1.732 1.732 0 0 1-1.733-1.732c0-.486.194-.953.537-1.296l.588-.588c.344-.344.537-.81.537-1.296V9.339Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
