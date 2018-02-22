import React from "react";
import styled from "styled-components";

const Range = styled.div`
  position: relative;
`;

const Line = styled.div`
  height: 2px;
  background-color: #00acde;
  border-radius: 2px;
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
  position: absolute;
  top: -7px;
`;

const LeftDot = Dot.extend`
  left: 0;
`;

const RightDot = Dot.extend`
  right: 0;
`;

export default function() {
  return (
    <Range>
      <LeftDot />
      <RightDot />
      <Line />
    </Range>
  );
}
