import React from "react";
import styled from "styled-components";

const Header = styled.span`
  font-size: 14px;
  line-heigth: 18px;
  font-weight: 900;
  color: white;
  padding: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Coster = Header.extend`
  background: #83d40b;
`;

const Faster = Header.extend`
  background: #af7542;
`;

const Best = Header.extend`
  background: #c279d1;
`;

const Common = Header.extend`
  display: none;
`;

const Icon = styled.span`
  padding-left: 8px;
`;

const emoji = {
  lowcost: (
    <Coster>
      Самый дешевый
      <Icon>
        <span role="img" aria-label="wow">
          🤑
        </span>
      </Icon>
    </Coster>
  ),
  faster: (
    <Faster>
      Самый быстрый
      <Icon>
        <span role="img" aria-label="flash">
          ⚡️
        </span>
      </Icon>
    </Faster>
  ),
  best: (
    <Best>
      Самый лучший
      <Icon>
        <span role="img" aria-label="love">
          😍
        </span>
      </Icon>
    </Best>
  ),
  common: <Common> </Common>
};

export default function(props) {
  const info = props.info;
  if (emoji[info.type] !== undefined) {
    return emoji[info.type];
  }
}
