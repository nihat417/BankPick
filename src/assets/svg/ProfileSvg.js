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
      <Path d="M19.167 23.75h-2.75a3.667 3.667 0 0 0-3.667 3.667v.916M28.333 29.25h-5.5M23.102 24.056l2.788-2.788a.917.917 0 0 1 1.296 0l.878.88a.917.917 0 0 1 0 1.296l-2.788 2.788a.917.917 0 0 1-.648.268h-1.337a.458.458 0 0 1-.458-.458v-1.337c0-.243.097-.476.269-.648Z" />
      <Circle cx={20.084} cy={16.417} r={3.667} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 10h22v22H10z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
