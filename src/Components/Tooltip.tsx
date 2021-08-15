import React, { FC, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./styled";

export interface ITooltip{
  position?: string;
  text: string;
  children: React.ReactChild;
}

const Tooltip: FC<ITooltip> = ({position,text,children})=> {
  const [isHovered, setIsHovered] = useState<boolean>(false)
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
                <TooltipBox position={position} >
                   {text}
                </TooltipBox>
               </CenterContainer>
              )}
    </TooltipWrapper>
  );
}

export default Tooltip;

