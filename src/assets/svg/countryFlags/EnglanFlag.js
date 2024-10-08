import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#F0F0F0"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
      />
      <Path
        fill="#D80027"
        d="M39.83 17.391H22.61V.17a20.198 20.198 0 0 0-5.218 0v17.222H.17a20.196 20.196 0 0 0 0 5.218h17.222V39.83a20.193 20.193 0 0 0 5.218 0V22.609H39.83a20.191 20.191 0 0 0 0-5.218Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
