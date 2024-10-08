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
      <Path d="m8.422 15.583 1.753 2.338c.412.55 1.237.55 1.65 0l1.753-2.338H16.5a2.75 2.75 0 0 0 2.75-2.75v-5.5a2.75 2.75 0 0 0-2.75-2.75h-11a2.75 2.75 0 0 0-2.75 2.75v5.5a2.75 2.75 0 0 0 2.75 2.75h2.922Z" />
      <Path d="M11.162 10.38a.229.229 0 1 1-.324.324.23.23 0 1 1 .324-.325ZM14.829 10.38a.23.23 0 1 1-.324.324.23.23 0 0 1 .324-.325ZM7.496 10.38a.229.229 0 1 1-.325.324.23.23 0 1 1 .325-.325Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
