import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E2D"
      d="M0 27C0 12.088 12.088 0 27 0s27 12.088 27 27-12.088 27-27 27S0 41.912 0 27Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M26.898 39.083v-15.5M22.398 28.083l4.5-4.68 4 4.68"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M31.232 31.167h2.773a3.799 3.799 0 0 0 3.792-3.792 3.799 3.799 0 0 0-3.792-3.792h-.471V22.5c0-3.586-2.914-6.5-6.5-6.5-3.225 0-5.899 2.36-6.406 5.442-2.575.13-4.628 2.242-4.628 4.85a4.875 4.875 0 0 0 4.875 4.875h1.69"
    />
  </Svg>
)
export default SvgComponent
