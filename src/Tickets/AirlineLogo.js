import React from "react";
import styled from "styled-components";

const WrapperSmall = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 8px;
  flex: 0 0 45%;
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
`;

export default function(props) {
  if (Array.isArray(props.airline)) {
    return (
      <Airlines>
        {props.airline.map((airline, i) => (
          <WrapperSmall key={i}>
            <ImgSmall src={airline} />
          </WrapperSmall>
        ))}
      </Airlines>
    );
  } else {
    return <Img src={props.airline} />;
  }
}
