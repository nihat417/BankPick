import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Circle cx={21} cy={21} r={21} fill="#1E1E2D" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m22.528 29.96 4.166-.931A1.672 1.672 0 0 0 28 27.393V15.606c0-.785-.543-1.465-1.305-1.634l-4.166-.931a1.669 1.669 0 0 0-2.029 1.635v13.649c0 1.07.987 1.867 2.028 1.634ZM23.312 20.519v1.884M13 25.248v1.924a1.88 1.88 0 0 0 1.875 1.885h2.813M13 17.711v-1.884a1.88 1.88 0 0 1 1.875-1.885h2.813M13 21.48h4.688M15.813 23.364l1.875-1.884-1.875-1.884"
    />
  </Svg>
)
export default SvgComponent
