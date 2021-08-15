import styled, { css } from "styled-components";
import { ITooltip } from "./Tooltip";

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100vh;
  margin: 0;
  background-color: rgb(58, 58, 58);
`;

export const TooltipTarget = styled.button`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

export const CenterContainer = styled.div<{ position: ITooltip["position"] }>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;
  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset !important;
          top: 61%;
        `;
      case "top":
        return css`
          top: unset !important;
          bottom: 61%;
        `;
      case "left":
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 10px);
          width: max-content;
        `;
      case "right":
        return css`
          margin-left: 0;
          width: 100%;
          right: unset;
          top: 50%;
          left: calc(100% + 10px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span<{ position: ITooltip["position"] }>`
  position: relative;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &:after {
            border-color: #fff;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent #fff;
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css``;
    }
  }}
`;
