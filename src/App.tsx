import React from "react";
import "./App.css";
import Button from "./Components/Button";
import styled from "styled-components";
import Tooltip from "./Components/Tooltip";
import { TooltipWrapper } from "./Components/styled";
const TooltipTarget = styled.span``;

function App() {
  return (
    <TooltipWrapper>
      <Tooltip text="This button is awesome" position="left">
        <TooltipTarget>
          <Button />
        </TooltipTarget>
      </Tooltip>
    </TooltipWrapper>
  );
}

export default App;
