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
        fill="#0052B4"
        d="M38.756 26.956A19.955 19.955 0 0 0 40 20c0-2.446-.44-4.79-1.244-6.957H1.244A19.958 19.958 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956L20 28.696l18.756-1.74Z"
      />
      <Path
        fill="#D80027"
        d="M20 40c8.6 0 15.93-5.428 18.756-13.044H1.244C4.07 34.572 11.4 40 20 40Z"
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
