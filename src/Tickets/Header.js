import React from "react";
import styled from "styled-components";

const Header = styled.div`
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

export default function(props) {
  const info = props.info;
  if (info.type === "lowcost") {
    return (
      <Coster>
        Самый дешевый
        <span role="img" aria-label="$">
          🤑
        </span>
      </Coster>
    );
  }
  if (info.type === "faster") {
    return (
      <Faster>
        Самый быстрый
        <span role="img" aria-label="flash">
          ⚡️
        </span>
      </Faster>
    );
  }
  if (info.type === "best") {
    return (
      <Best>
        Самый лучший{" "}
        <span role="img" aria-label="love">
          😍
        </span>
      </Best>
    );
  }
  return <div />;
}
