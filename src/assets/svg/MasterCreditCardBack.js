import * as React from "react"
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={220}
    fill="none"
    {...props}
  >
    <Rect width={360} height={220} fill="url(#a)" rx={21} />
    <Mask
      id="c"
      width={360}
      height={220}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Rect width={360} height={220} fill="url(#b)" rx={21} />
    </Mask>
    <G mask="url(#c)">
      <Path
        fill="url(#d)"
        fillOpacity={0.15}
        d="M155 66.224c-65.366-67-131-49-168-35v193l369 10 18-43c-129 15-139-43-219-125Z"
      />
    </G>
    <Path
      fill="#fff"
      d="M15.996 128.168c-1 0-1.796-.288-2.388-.864-.592-.584-.888-1.432-.888-2.544v-1.92c0-1.112.296-1.956.888-2.532.592-.584 1.388-.876 2.388-.876.992 0 1.752.276 2.28.828.536.552.804 1.308.804 2.268v.06h-.996v-.096c0-.632-.172-1.148-.516-1.548-.336-.408-.86-.612-1.572-.612-.712 0-1.268.22-1.668.66-.4.432-.6 1.04-.6 1.824v1.968c0 .784.2 1.396.6 1.836.4.432.956.648 1.668.648s1.236-.2 1.572-.6c.344-.408.516-.928.516-1.56v-.192h.996v.156c0 .96-.268 1.716-.804 2.268-.528.552-1.288.828-2.28.828Zm6.98 0c-.409 0-.78-.072-1.117-.216a1.821 1.821 0 0 1-.792-.624c-.192-.272-.288-.604-.288-.996 0-.4.096-.728.288-.984.192-.264.456-.46.792-.588a2.982 2.982 0 0 1 1.128-.204h1.98v-.432c0-.416-.124-.744-.372-.984-.24-.24-.6-.36-1.08-.36-.472 0-.84.116-1.104.348-.264.224-.444.528-.54.912l-.888-.288c.096-.328.248-.624.456-.888.208-.272.484-.488.828-.648.352-.168.772-.252 1.26-.252.752 0 1.336.196 1.752.588.416.384.624.928.624 1.632v2.652c0 .24.112.36.336.36h.54V128h-.828c-.264 0-.476-.072-.636-.216a.79.79 0 0 1-.24-.6v-.06h-.144a2.88 2.88 0 0 1-.36.48c-.144.16-.344.292-.6.396-.256.112-.588.168-.996.168Zm.107-.816c.56 0 1.012-.164 1.356-.492.352-.336.528-.804.528-1.404v-.132h-1.944c-.376 0-.688.084-.936.252-.24.16-.36.404-.36.732 0 .328.124.584.372.768.256.184.584.276.984.276Zm5.475.648v-5.868h.924v.72h.168c.104-.256.264-.444.48-.564.216-.12.5-.18.852-.18h.696v.864h-.756c-.424 0-.768.12-1.032.36-.256.232-.384.596-.384 1.092V128h-.948Zm7.276.168c-.504 0-.968-.12-1.392-.36a2.589 2.589 0 0 1-1.008-1.044c-.248-.456-.372-.996-.372-1.62v-.156c0-.624.124-1.16.372-1.608.248-.456.58-.804.996-1.044a2.73 2.73 0 0 1 1.404-.372c.408 0 .752.056 1.032.168.288.104.52.24.696.408.176.16.312.332.408.516h.168V119.6h.948v8.4h-.924v-.972h-.168c-.16.296-.408.56-.744.792-.336.232-.808.348-1.416.348Zm.252-.84c.608 0 1.1-.192 1.476-.576.384-.392.576-.936.576-1.632v-.108c0-.696-.192-1.236-.576-1.62-.376-.392-.868-.588-1.476-.588-.6 0-1.096.196-1.488.588-.384.384-.576.924-.576 1.62v.108c0 .696.192 1.24.576 1.632.392.384.888.576 1.488.576Zm8.993.672v-8.4h1.008v3.732h3.936V119.6h1.008v8.4h-1.008v-3.756h-3.936V128h-1.008Zm11.103.168c-.592 0-1.116-.124-1.572-.372a2.703 2.703 0 0 1-1.056-1.044c-.248-.456-.372-.992-.372-1.608v-.156c0-.608.124-1.14.372-1.596a2.681 2.681 0 0 1 1.056-1.056c.456-.248.98-.372 1.572-.372.592 0 1.112.124 1.56.372.456.248.808.6 1.056 1.056.256.456.384.988.384 1.596v.156c0 .616-.128 1.152-.384 1.608-.248.448-.6.796-1.056 1.044-.448.248-.968.372-1.56.372Zm0-.852c.624 0 1.12-.196 1.488-.588.376-.4.564-.936.564-1.608v-.108c0-.672-.188-1.204-.564-1.596-.368-.4-.864-.6-1.488-.6-.616 0-1.112.2-1.488.6-.376.392-.564.924-.564 1.596v.108c0 .672.188 1.208.564 1.608.376.392.872.588 1.488.588Zm5.186.684v-8.4h.948v8.4h-.948Zm5.905.168c-.504 0-.968-.12-1.392-.36a2.589 2.589 0 0 1-1.008-1.044c-.248-.456-.372-.996-.372-1.62v-.156c0-.624.124-1.16.372-1.608.248-.456.58-.804.996-1.044a2.73 2.73 0 0 1 1.404-.372c.408 0 .752.056 1.032.168.288.104.52.24.696.408.176.16.312.332.408.516h.168V119.6h.948v8.4h-.924v-.972h-.168c-.16.296-.408.56-.744.792-.336.232-.808.348-1.416.348Zm.252-.84c.608 0 1.1-.192 1.476-.576.384-.392.576-.936.576-1.632v-.108c0-.696-.192-1.236-.576-1.62-.376-.392-.868-.588-1.476-.588-.6 0-1.096.196-1.488.588-.384.384-.576.924-.576 1.62v.108c0 .696.192 1.24.576 1.632.392.384.888.576 1.488.576Zm8.155.84c-.592 0-1.112-.124-1.56-.372a2.682 2.682 0 0 1-1.044-1.068c-.248-.456-.372-.984-.372-1.584V125c0-.608.124-1.14.372-1.596a2.624 2.624 0 0 1 1.032-1.056c.44-.256.944-.384 1.512-.384.552 0 1.04.12 1.464.36.424.232.756.568.996 1.008.24.44.36.956.36 1.548v.432h-4.788c.024.632.228 1.128.612 1.488.384.352.864.528 1.44.528.504 0 .892-.116 1.164-.348.272-.232.48-.508.624-.828l.816.396c-.12.248-.288.496-.504.744a2.481 2.481 0 0 1-.828.624c-.336.168-.768.252-1.296.252Zm-2.016-3.636h3.816c-.032-.544-.22-.968-.564-1.272-.336-.304-.768-.456-1.296-.456-.536 0-.976.152-1.32.456-.344.304-.556.728-.636 1.272Zm6.91 3.468v-5.868h.923v.72h.168c.104-.256.264-.444.48-.564.216-.12.5-.18.852-.18h.696v.864h-.756c-.424 0-.768.12-1.032.36-.256.232-.384.596-.384 1.092V128h-.948Zm8.565 0v-5.868h.924v.996h.168c.128-.28.344-.532.648-.756.312-.232.768-.348 1.368-.348.44 0 .832.092 1.176.276.352.184.632.456.84.816.208.36.312.804.312 1.332V128h-.948v-3.48c0-.584-.148-1.008-.444-1.272-.288-.264-.68-.396-1.176-.396-.568 0-1.032.184-1.392.552-.352.368-.528.916-.528 1.644V128h-.948Zm9.64.168c-.409 0-.78-.072-1.117-.216a1.821 1.821 0 0 1-.792-.624c-.192-.272-.288-.604-.288-.996 0-.4.096-.728.288-.984.192-.264.456-.46.792-.588a2.982 2.982 0 0 1 1.128-.204h1.98v-.432c0-.416-.124-.744-.372-.984-.24-.24-.6-.36-1.08-.36-.472 0-.84.116-1.104.348-.264.224-.444.528-.54.912l-.888-.288c.096-.328.248-.624.456-.888.208-.272.484-.488.828-.648.352-.168.772-.252 1.26-.252.752 0 1.336.196 1.752.588.416.384.624.928.624 1.632v2.652c0 .24.112.36.336.36h.54V128h-.828c-.264 0-.476-.072-.636-.216a.79.79 0 0 1-.24-.6v-.06h-.144a2.88 2.88 0 0 1-.36.48c-.144.16-.344.292-.6.396-.256.112-.588.168-.996.168Zm.107-.816c.56 0 1.012-.164 1.356-.492.352-.336.528-.804.528-1.404v-.132h-1.944c-.376 0-.688.084-.936.252-.24.16-.36.404-.36.732 0 .328.124.584.372.768.256.184.584.276.984.276Zm5.475.648v-5.868h.924v.732h.168c.112-.208.296-.4.552-.576.256-.176.616-.264 1.08-.264.456 0 .824.1 1.104.3.288.2.496.444.624.732h.168c.136-.288.34-.532.612-.732.28-.2.668-.3 1.164-.3.392 0 .736.08 1.032.24.296.16.528.392.696.696.176.296.264.652.264 1.068V128h-.948v-3.888c0-.392-.116-.7-.348-.924-.224-.232-.54-.348-.948-.348-.432 0-.788.14-1.068.42-.272.28-.408.684-.408 1.212V128h-.948v-3.888c0-.392-.116-.7-.348-.924-.224-.232-.54-.348-.948-.348-.432 0-.788.14-1.068.42-.272.28-.408.684-.408 1.212V128h-.948Zm13.492.168c-.592 0-1.112-.124-1.56-.372a2.682 2.682 0 0 1-1.044-1.068c-.248-.456-.372-.984-.372-1.584V125c0-.608.124-1.14.372-1.596a2.624 2.624 0 0 1 1.032-1.056c.44-.256.944-.384 1.512-.384.552 0 1.04.12 1.464.36.424.232.756.568.996 1.008.24.44.36.956.36 1.548v.432h-4.788c.024.632.228 1.128.612 1.488.384.352.864.528 1.44.528.504 0 .892-.116 1.164-.348.272-.232.48-.508.624-.828l.816.396c-.12.248-.288.496-.504.744a2.481 2.481 0 0 1-.828.624c-.336.168-.768.252-1.296.252Zm-2.016-3.636h3.816c-.032-.544-.22-.968-.564-1.272-.336-.304-.768-.456-1.296-.456-.536 0-.976.152-1.32.456-.344.304-.556.728-.636 1.272Z"
    />
    <G filter="url(#e)">
      <Path
        fill="url(#f)"
        d="M0 161h360v39c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-39Z"
      />
      <Path
        stroke="#fff"
        strokeOpacity={0.3}
        d="M.5 161.5h359V200c0 10.77-8.73 19.5-19.5 19.5H20C9.23 219.5.5 210.77.5 200v-38.5Z"
      />
    </G>
    <Path
      fill="#fff"
      d="M12.96 187v-8.4h5.172v.912h-4.164v2.808h3.828v.912h-3.828v2.856h4.224V187H12.96Zm6.798 0 2.352-2.976-2.28-2.892h1.14l1.752 2.268h.168l1.74-2.268h1.152l-2.292 2.892L25.842 187H24.69l-1.8-2.34h-.168l-1.8 2.34h-1.164Zm8.073 2.4v-8.268h.924v.972h.168c.152-.296.396-.56.732-.792.344-.232.82-.348 1.428-.348.504 0 .964.124 1.38.372.424.24.76.584 1.008 1.032.256.448.384.988.384 1.62v.156c0 .624-.124 1.164-.372 1.62a2.589 2.589 0 0 1-1.008 1.044c-.416.24-.88.36-1.392.36-.408 0-.756-.056-1.044-.168a1.968 1.968 0 0 1-.684-.408 2.138 2.138 0 0 1-.408-.516h-.168v3.324h-.948Zm3-3.072c.608 0 1.1-.192 1.476-.576.384-.392.576-.936.576-1.632v-.108c0-.696-.192-1.236-.576-1.62-.376-.392-.868-.588-1.476-.588-.6 0-1.096.196-1.488.588-.384.384-.576.924-.576 1.62v.108c0 .696.192 1.24.576 1.632.392.384.888.576 1.488.576Zm5.203.672v-5.868h.948V187h-.948Zm.48-6.78a.74.74 0 0 1-.528-.204.7.7 0 0 1-.204-.516c0-.216.068-.392.204-.528a.74.74 0 0 1 .528-.204.7.7 0 0 1 .516.204.714.714 0 0 1 .204.528.7.7 0 0 1-.72.72Zm2.941 6.78v-5.868h.924v.72h.168c.104-.256.264-.444.48-.564.216-.12.5-.18.852-.18h.696v.864h-.756c-.424 0-.768.12-1.032.36-.256.232-.384.596-.384 1.092V187h-.948Zm5.712 2.4v-.84h3.36c.231 0 .347-.12.347-.36v-2.136h-.168a1.838 1.838 0 0 1-1.008.9c-.264.096-.596.144-.995.144-.425 0-.817-.092-1.177-.276a2.06 2.06 0 0 1-.84-.816c-.2-.36-.3-.8-.3-1.32v-3.564h.948v3.492c0 .576.144.996.432 1.26.297.264.693.396 1.189.396.56 0 1.02-.184 1.38-.552.36-.368.54-.916.54-1.644v-2.952h.947v7.236c0 .32-.092.572-.276.756-.175.184-.435.276-.78.276h-3.6Zm13.165-2.232c-.504 0-.968-.12-1.392-.36a2.589 2.589 0 0 1-1.008-1.044c-.248-.456-.372-.996-.372-1.62v-.156c0-.624.124-1.16.372-1.608.248-.456.58-.804.996-1.044a2.73 2.73 0 0 1 1.404-.372c.408 0 .752.056 1.032.168.288.104.52.24.696.408.176.16.312.332.408.516h.168V178.6h.948v8.4h-.924v-.972h-.168c-.16.296-.408.56-.744.792-.336.232-.808.348-1.416.348Zm.252-.84c.608 0 1.1-.192 1.476-.576.384-.392.576-.936.576-1.632v-.108c0-.696-.192-1.236-.576-1.62-.376-.392-.868-.588-1.476-.588-.6 0-1.096.196-1.488.588-.384.384-.576.924-.576 1.62v.108c0 .696.192 1.24.576 1.632.392.384.888.576 1.488.576Zm7.267.84c-.408 0-.78-.072-1.116-.216a1.821 1.821 0 0 1-.792-.624c-.192-.272-.288-.604-.288-.996 0-.4.096-.728.288-.984.192-.264.456-.46.792-.588a2.982 2.982 0 0 1 1.128-.204h1.98v-.432c0-.416-.124-.744-.372-.984-.24-.24-.6-.36-1.08-.36-.472 0-.84.116-1.104.348-.264.224-.444.528-.54.912l-.888-.288c.096-.328.248-.624.456-.888.208-.272.484-.488.828-.648.352-.168.772-.252 1.26-.252.752 0 1.336.196 1.752.588.416.384.624.928.624 1.632v2.652c0 .24.112.36.336.36h.54V187h-.828c-.264 0-.476-.072-.636-.216a.79.79 0 0 1-.24-.6v-.06h-.144a2.88 2.88 0 0 1-.36.48c-.144.16-.344.292-.6.396-.256.112-.588.168-.996.168Zm.108-.816c.56 0 1.012-.164 1.356-.492.352-.336.528-.804.528-1.404v-.132h-1.944c-.376 0-.688.084-.936.252-.24.16-.36.404-.36.732 0 .328.124.584.372.768.256.184.584.276.984.276Zm7.248.648c-.336 0-.596-.092-.78-.276-.177-.184-.265-.436-.265-.756v-4.008h-1.764v-.828h1.764v-2.088h.948v2.088h1.92v.828h-1.92v3.864c0 .24.117.36.349.36h1.307V187h-1.56Zm6.316.168c-.592 0-1.112-.124-1.56-.372a2.682 2.682 0 0 1-1.044-1.068c-.248-.456-.372-.984-.372-1.584V184c0-.608.124-1.14.372-1.596a2.624 2.624 0 0 1 1.032-1.056c.44-.256.944-.384 1.512-.384.552 0 1.04.12 1.464.36.424.232.756.568.996 1.008.24.44.36.956.36 1.548v.432h-4.788c.024.632.228 1.128.612 1.488.384.352.864.528 1.44.528.504 0 .892-.116 1.164-.348.272-.232.48-.508.624-.828l.816.396c-.12.248-.288.496-.504.744a2.481 2.481 0 0 1-.828.624c-.336.168-.768.252-1.296.252Zm-2.016-3.636h3.816c-.032-.544-.22-.968-.564-1.272-.336-.304-.768-.456-1.296-.456-.536 0-.976.152-1.32.456-.344.304-.556.728-.636 1.272Z"
    />
    <Path
      fill="#E7E7E9"
      d="M331.277 25.716c-.464-.668-1.526-.912-2.371-.545-.846.367-1.154 1.207-.69 1.876 2.455 3.533 5.996 13.228-.037 22.963-.425.685-.067 1.513.799 1.849.866.335 1.912.052 2.337-.633 6.667-10.759 2.8-21.425-.038-25.51Z"
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Path
      fill="#E7E7E9"
      d="M324.714 27.784c-.49-.704-1.671-.986-2.638-.63-.967.357-1.354 1.217-.864 1.922 2.152 3.093 5.189 11.29-.004 18.855-.485.706-.092 1.565.877 1.918.97.353 2.149.067 2.633-.64 5.94-8.652 2.483-17.849-.004-21.425Z"
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Path
      fill="#E7E7E9"
      d="M318.529 30.757c-.481-.692-1.613-.958-2.528-.594-.915.365-1.267 1.221-.785 1.914.738 1.061 1.686 3.056 1.962 5.418.274 2.349-.126 4.973-1.935 7.39-.509.681-.192 1.546.707 1.931.9.385 2.042.146 2.552-.535 2.276-3.043 2.727-6.278 2.405-9.036-.32-2.745-1.414-5.102-2.378-6.488ZM311.343 33.724c-.478-.68-1.564-.924-2.425-.547-.861.378-1.172 1.234-.693 1.913.435.618 1 1.765 1.162 3.05.162 1.276-.084 2.564-1.054 3.635-.573.633-.387 1.511.414 1.963.802.452 1.916.305 2.488-.327 1.625-1.794 1.919-3.832 1.702-5.55a9.6 9.6 0 0 0-1.594-4.137Z"
      style={{
        mixBlendMode: "overlay",
      }}
    />
    <Path
      fill="#FFC738"
      d="M58.399 53.8H23.593c-1.43 0-2.593-1.105-2.593-2.47V26.663c0-1.358 1.164-2.464 2.593-2.464h34.798c1.437 0 2.601 1.106 2.601 2.464v24.665c0 1.366-1.164 2.471-2.593 2.471Z"
    />
    <Path
      fill="#FFB42E"
      d="M58.4 24.2H40.997v29.6h17.402c1.438 0 2.594-1.105 2.594-2.463V26.664c0-1.358-1.164-2.464-2.593-2.464Z"
    />
    <Path
      fill="#C66D4E"
      d="M60.992 39.509v-1.017H47.018v-4.49l3.609-3.428h10.365c0-.348-.039-.69-.101-1.016H50.4c-.141 0-.282.06-.375.156l-3.765 3.569h-4.726V24.2h-1.07v9.075h-4.671l-3.757-3.569a.567.567 0 0 0-.383-.156H21.11a5.542 5.542 0 0 0-.101 1.017h10.428l3.538 3.361v4.55H21v1.016h13.974v4.548l-3.538 3.384H21.008c0 .349.039.69.101 1.017h10.553c.14 0 .281-.06.383-.156l3.757-3.57h4.67v9.076h1.07v-9.075h4.727l3.764 3.569a.533.533 0 0 0 .375.156h10.49A5.54 5.54 0 0 0 61 47.426H50.62l-3.61-3.428v-4.49h13.982ZM45.948 43.7h-9.904v-9.409h9.897v9.41h.007Z"
    />
    <Path
      fill="#AF5A35"
      d="M60.993 39.509v-1.017H47.019v-4.49l3.608-3.428h10.366c0-.348-.04-.69-.102-1.016h-10.49c-.14 0-.281.06-.375.156l-3.765 3.569h-4.726V24.2h-.538v10.092h4.952v9.41h-4.952v10.09h.538v-9.074h4.726l3.765 3.569a.534.534 0 0 0 .375.156h10.49c.063-.334.102-.668.102-1.017H50.62l-3.609-3.428v-4.49h13.982Z"
    />
    <Path
      fill="#fff"
      d="M118.996 187.168c-1 0-1.796-.288-2.388-.864-.592-.584-.888-1.432-.888-2.544v-1.92c0-1.112.296-1.956.888-2.532.592-.584 1.388-.876 2.388-.876.992 0 1.752.276 2.28.828.536.552.804 1.308.804 2.268v.06h-.996v-.096c0-.632-.172-1.148-.516-1.548-.336-.408-.86-.612-1.572-.612-.712 0-1.268.22-1.668.66-.4.432-.6 1.04-.6 1.824v1.968c0 .784.2 1.396.6 1.836.4.432.956.648 1.668.648s1.236-.2 1.572-.6c.344-.408.516-.928.516-1.56v-.192h.996v.156c0 .96-.268 1.716-.804 2.268-.528.552-1.288.828-2.28.828Zm6.957-.168-2.532-8.4h1.044l2.292 7.788h.156l2.292-7.788h1.044l-2.532 8.4h-1.764Zm7.909 0-2.532-8.4h1.044l2.292 7.788h.156l2.292-7.788h1.044l-2.532 8.4h-1.764Z"
    />
    <Circle cx={302} cy={181} r={10} fill="#EA001B" />
    <Circle cx={318} cy={181} r={10} fill="#F79F1A" />
    <Path
      fill="#fff"
      d="M275.346 200.545h1.367l3.213 7.848h.11l3.213-7.848h1.367V210h-1.071v-7.183h-.092L280.498 210h-1.034l-2.955-7.183h-.092V210h-1.071v-9.455Zm13.504 9.621a2.87 2.87 0 0 1-1.223-.254 2.095 2.095 0 0 1-.872-.743c-.216-.326-.324-.72-.324-1.182 0-.406.08-.735.24-.988.16-.255.374-.455.642-.6a3.37 3.37 0 0 1 .886-.323c.327-.074.654-.132.984-.175.431-.056.78-.097 1.048-.125.271-.031.468-.082.591-.152.126-.071.189-.194.189-.37v-.037c0-.455-.125-.809-.374-1.061-.246-.253-.62-.379-1.122-.379-.52 0-.928.114-1.223.342-.296.227-.503.47-.623.729l-1.035-.369c.185-.431.431-.767.739-1.007.311-.243.65-.412 1.016-.508a4.23 4.23 0 0 1 1.089-.147c.228 0 .49.027.785.083.299.052.586.161.863.328.28.166.513.417.697.752.185.336.277.785.277 1.348V210h-1.089v-.96h-.055a1.918 1.918 0 0 1-.37.494 2.141 2.141 0 0 1-.688.448c-.286.123-.635.184-1.048.184Zm.167-.978c.43 0 .794-.085 1.089-.254a1.731 1.731 0 0 0 .905-1.501v-.997c-.046.055-.148.106-.305.152a4.94 4.94 0 0 1-.535.116 25.025 25.025 0 0 1-1.044.138 4.19 4.19 0 0 0-.794.18c-.243.08-.44.202-.591.365-.147.16-.221.379-.221.656 0 .378.14.664.42.858.283.191.642.287 1.076.287Zm10.095-4.691-.979.277a1.831 1.831 0 0 0-.272-.475 1.317 1.317 0 0 0-.48-.388c-.204-.102-.464-.152-.781-.152-.434 0-.795.1-1.085.3-.286.197-.429.447-.429.752 0 .271.099.485.296.642.197.157.504.288.923.392l1.052.259c.634.154 1.107.389 1.418.706.311.314.466.719.466 1.214 0 .406-.117.77-.351 1.09-.231.32-.554.572-.969.757-.416.184-.899.277-1.45.277-.723 0-1.322-.157-1.796-.471-.474-.314-.774-.773-.9-1.376l1.034-.258c.099.381.285.667.559.858.277.191.638.287 1.085.287.507 0 .911-.108 1.209-.324.302-.218.453-.48.453-.784a.826.826 0 0 0-.259-.619c-.172-.169-.437-.296-.794-.379l-1.182-.277c-.649-.153-1.126-.392-1.431-.715-.302-.326-.452-.734-.452-1.224 0-.4.112-.754.337-1.061.227-.308.537-.55.928-.725.393-.176.84-.263 1.338-.263.702 0 1.253.154 1.653.461.403.308.689.714.859 1.219Zm4.853-1.588v.923h-3.675v-.923h3.675Zm-2.604-1.699h1.09v6.759c0 .308.044.538.133.692.093.151.21.253.351.305.145.049.297.074.457.074a1.846 1.846 0 0 0 .48-.056l.222.979a2.232 2.232 0 0 1-.309.083c-.133.031-.3.046-.503.046-.308 0-.61-.066-.905-.198a1.8 1.8 0 0 1-.73-.605c-.191-.271-.286-.612-.286-1.025v-7.054Zm7.139 8.938c-.683 0-1.272-.151-1.768-.453a3.034 3.034 0 0 1-1.14-1.274c-.265-.548-.397-1.185-.397-1.911s.132-1.367.397-1.921c.268-.557.64-.991 1.117-1.301.48-.314 1.04-.471 1.681-.471.369 0 .734.061 1.094.184.36.124.688.324.983.601.296.273.531.637.706 1.089.176.452.264 1.01.264 1.671v.462h-5.466v-.942h4.358c0-.4-.08-.757-.24-1.071a1.807 1.807 0 0 0-.674-.743 1.886 1.886 0 0 0-1.025-.273c-.434 0-.81.108-1.127.324a2.126 2.126 0 0 0-.725.831 2.439 2.439 0 0 0-.253 1.098v.628c0 .536.092.99.277 1.362.187.369.447.651.78.845a2.28 2.28 0 0 0 1.158.286c.287 0 .545-.04.776-.12.234-.083.435-.206.605-.369.169-.167.3-.373.392-.619l1.053.296a2.33 2.33 0 0 1-.559.941 2.722 2.722 0 0 1-.969.628 3.591 3.591 0 0 1-1.298.222Zm4.594-.148v-7.091h1.052v1.071h.074c.13-.351.363-.635.702-.854a2.07 2.07 0 0 1 1.145-.328c.08 0 .18.002.3.005s.211.008.272.014v1.108a3.003 3.003 0 0 0-.254-.042 2.553 2.553 0 0 0-.41-.032c-.345 0-.653.072-.924.217a1.59 1.59 0 0 0-.868 1.445V210h-1.089Zm7.502.148c-.665 0-1.238-.157-1.718-.471a3.072 3.072 0 0 1-1.108-1.297c-.258-.551-.387-1.181-.387-1.889 0-.72.132-1.355.397-1.906.267-.554.64-.987 1.117-1.297.48-.314 1.04-.471 1.68-.471.499 0 .948.092 1.348.277.4.184.728.443.983.775.256.333.414.72.476 1.164h-1.09a1.688 1.688 0 0 0-.553-.859c-.284-.252-.665-.379-1.145-.379-.425 0-.797.111-1.118.333-.317.218-.564.528-.743.928-.175.397-.263.863-.263 1.399 0 .547.086 1.024.259 1.431.175.406.421.721.738.946.32.225.696.337 1.127.337.283 0 .54-.049.771-.148.23-.098.426-.24.586-.424.16-.185.274-.407.341-.665h1.09a2.535 2.535 0 0 1-.457 1.131c-.24.332-.559.597-.956.794-.394.194-.852.291-1.375.291Zm6.467.018a2.87 2.87 0 0 1-1.223-.254 2.104 2.104 0 0 1-.873-.743c-.215-.326-.323-.72-.323-1.182 0-.406.08-.735.24-.988.16-.255.374-.455.642-.6a3.37 3.37 0 0 1 .886-.323c.327-.074.654-.132.984-.175.431-.056.78-.097 1.048-.125.27-.031.467-.082.591-.152.126-.071.189-.194.189-.37v-.037c0-.455-.125-.809-.374-1.061-.246-.253-.62-.379-1.122-.379-.52 0-.928.114-1.223.342-.296.227-.503.47-.624.729l-1.034-.369c.185-.431.431-.767.739-1.007a2.777 2.777 0 0 1 1.016-.508 4.23 4.23 0 0 1 1.089-.147c.228 0 .489.027.785.083.298.052.586.161.863.328.28.166.513.417.697.752.185.336.277.785.277 1.348V210h-1.089v-.96h-.056a1.912 1.912 0 0 1-.369.494 2.153 2.153 0 0 1-.688.448c-.286.123-.635.184-1.048.184Zm.166-.978c.431 0 .795-.085 1.09-.254a1.731 1.731 0 0 0 .905-1.501v-.997c-.046.055-.148.106-.305.152a4.94 4.94 0 0 1-.535.116 25.025 25.025 0 0 1-1.044.138 4.173 4.173 0 0 0-.794.18c-.243.08-.44.202-.591.365-.147.16-.221.379-.221.656 0 .378.14.664.42.858.283.191.642.287 1.075.287Zm5.073.812v-7.091h1.052v1.071h.074c.13-.351.363-.635.702-.854a2.07 2.07 0 0 1 1.145-.328c.08 0 .18.002.3.005s.211.008.272.014v1.108a3.003 3.003 0 0 0-.254-.042 2.553 2.553 0 0 0-.41-.032c-.345 0-.653.072-.924.217a1.59 1.59 0 0 0-.868 1.445V210h-1.089Zm7.298.148c-.59 0-1.112-.15-1.564-.448-.453-.302-.807-.726-1.062-1.274-.256-.551-.383-1.202-.383-1.953 0-.745.127-1.391.383-1.939.255-.548.611-.971 1.066-1.269.456-.299.982-.448 1.579-.448.462 0 .826.077 1.094.231.271.15.477.323.619.517.144.19.257.347.337.471h.092v-3.491h1.089V210h-1.052v-1.089h-.129c-.08.129-.194.292-.342.489a2.029 2.029 0 0 1-.632.522c-.274.15-.639.226-1.095.226Zm.148-.979c.437 0 .807-.114 1.108-.342.302-.23.531-.549.688-.955.157-.41.235-.882.235-1.417 0-.53-.076-.993-.23-1.39-.154-.4-.382-.711-.684-.933-.301-.224-.674-.337-1.117-.337-.461 0-.846.119-1.154.356a2.124 2.124 0 0 0-.688.956c-.151.4-.226.849-.226 1.348 0 .504.077.963.231 1.375.157.41.388.736.692.979.308.24.69.36 1.145.36Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={432}
        x2={-21}
        y1={-11}
        y2={230}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E4C628" />
        <Stop offset={1} stopColor="#9E0F0F" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={432}
        x2={-21}
        y1={-11}
        y2={230}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00AA58" />
        <Stop offset={1} stopColor="#008989" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={264}
        x2={24}
        y1={63.224}
        y2={206.224}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9D9D9" />
        <Stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={-330.935}
        x2={-96.279}
        y1={108.426}
        y2={492.705}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E4C628" stopOpacity={0.7} />
        <Stop offset={1} stopColor="#9E0F0F" stopOpacity={0.71} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
