import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#D80027"
        d="M20 40.581c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z"
      />
      <Path
        fill="#F0F0F0"
        d="m19.18 16.924 1.642 2.261 2.658-.862-1.644 2.26 1.64 2.261-2.656-.865-1.643 2.26.001-2.794-2.657-.865 2.658-.862.002-2.794Z"
      />
      <Path
        fill="#F0F0F0"
        d="M14.703 26.233a5.652 5.652 0 1 1 2.688-10.625 6.956 6.956 0 1 0 0 9.945c-.8.434-1.715.68-2.688.68Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .581h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
