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
        fill="#FFDA44"
        d="M0 20c0 2.446.44 4.79 1.244 6.956L20 28.696l18.756-1.74A19.957 19.957 0 0 0 40 20c0-2.446-.44-4.79-1.244-6.957L20 11.304l-18.756 1.74A19.958 19.958 0 0 0 0 20Z"
      />
      <Path
        fill="#D80027"
        d="M38.756 13.043C35.93 5.428 28.599 0 20 0 11.4 0 4.07 5.428 1.244 13.043h37.512ZM1.244 26.956C4.07 34.572 11.401 40 20 40c8.6 0 15.93-5.428 18.756-13.044H1.244Z"
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
