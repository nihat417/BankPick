import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#F0F0F0"
        d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256Z"
      />
      <Path
        fill="#D80027"
        d="M509.833 222.609H289.392V2.167A258.556 258.556 0 0 0 256 0c-11.317 0-22.461.744-33.391 2.167v220.441H2.167A258.533 258.533 0 0 0 0 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0 0 66.783 0V289.392h220.442A258.533 258.533 0 0 0 512 256c0-11.319-.744-22.461-2.167-33.391Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h512v512H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
