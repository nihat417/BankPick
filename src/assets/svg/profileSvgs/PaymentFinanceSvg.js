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
      <Path d="M2.75 6.417h16.5M8.773 10.083H6.417M10.083 15.583H5.5a2.75 2.75 0 0 1-2.75-2.75V5.5A2.75 2.75 0 0 1 5.5 2.75h11a2.75 2.75 0 0 1 2.75 2.75v3.667M15.852 18.982l4.046-4.047a.916.916 0 0 0 0-1.296l-1.454-1.454a.916.916 0 0 0-1.296 0l-4.046 4.046a.916.916 0 0 0-.269.649v2.37h2.37a.916.916 0 0 0 .649-.268Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
