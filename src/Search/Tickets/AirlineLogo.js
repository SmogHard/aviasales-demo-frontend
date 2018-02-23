import React from "react";
import styled from "styled-components";

const WrapperSmall = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 4px;
  flex: 0 0 45%;
  margin-right: 10px;
`;

const Airlines = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 36px;
  width: 96px;
`;
const ImgSmall = styled.img`
  width: 100%;
  height: 28px;
  width: 28px;
`;

export default function(props) {
  if (props.airline.length === 1) {
    return <Img src={props.airline} />;
  } else {
    return (
      <Airlines>
        {props.airline.map((airline, i) => (
          <WrapperSmall key={i}>
            <ImgSmall src={airline} />
          </WrapperSmall>
        ))}
      </Airlines>
    );
  }
}
