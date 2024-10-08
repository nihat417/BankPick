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
      <Path d="M15.585 16.502V11a1.834 1.834 0 0 0-1.834-1.834h-9.17A1.834 1.834 0 0 0 2.747 11v5.502a1.834 1.834 0 0 0 1.834 1.834h9.17a1.834 1.834 0 0 0 1.834-1.834ZM2.747 12.906h12.838" />
      <Path d="m5.681 9.166 1.11-4.145a1.83 1.83 0 0 1 2.247-1.293l8.858 2.375A1.83 1.83 0 0 1 19.19 8.35l-1.421 5.31a1.827 1.827 0 0 1-2.183 1.31" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
