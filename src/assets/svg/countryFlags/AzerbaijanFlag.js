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
        fill="#D80027"
        d="M40 20c0-2.447-.44-4.79-1.244-6.957L20 12.173l-18.756.87A19.957 19.957 0 0 0 0 20c0 2.446.44 4.79 1.244 6.956l18.756.87 18.756-.87A19.956 19.956 0 0 0 40 20Z"
      />
      <Path
        fill="#6DA544"
        d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40Z"
      />
      <Path
        fill="#338AF3"
        d="M1.244 13.043h37.512C35.93 5.428 28.6 0 20 0 11.4 0 4.07 5.428 1.244 13.043Z"
      />
      <Path
        fill="#F0F0F0"
        d="M20.435 25.652a5.652 5.652 0 1 1 2.689-10.625 6.956 6.956 0 1 0 0 9.945c-.8.434-1.716.68-2.689.68Z"
      />
      <Path
        fill="#F0F0F0"
        d="m24.783 16.087.749 2.105 2.018-.96-.96 2.02 2.106.748-2.105.749.96 2.018-2.02-.96-.748 2.106-.748-2.105-2.019.959.96-2.018L20.87 20l2.106-.749-.96-2.018 2.019.96.748-2.106Z"
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
