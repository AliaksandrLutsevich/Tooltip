import React, { FC, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./styled";

// interface ITooltip{
//   position?: string;
//   text: string;
//   children: React.ReactChild;
//   // onMouseEnter: (a:boolean) => void;
//   // onMouseLeave: (s:boolean) => void;
// }

// const Tooltip: FC<ITooltip> = ({position,text,children})=> {
//   const [isHovered, setIsHovered] = useState<boolean>(false)
//   const showTooltip = isHovered;
//   return (
//     <TooltipWrapper>
//       <TooltipTarget
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {children}
//       </TooltipTarget>
//       {showTooltip && (
//        <CenterContainer {position}>
//                 <TooltipBox {position} >
//                    {text}
//                 </TooltipBox>
//                </CenterContainer>
//               )}
//     </TooltipWrapper>
//   );
// }

// export default Tooltip;

function Tooltip({ position, text, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const showTooltip = isHovered;

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox position={position}>{text}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
