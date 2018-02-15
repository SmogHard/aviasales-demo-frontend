import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  margin-bottom: 21px;
  justify-content: center;
  background: transparent;
  border: 0;
  outline: none;
  border-bottom: 1px solid transparent;
  color: #00ace2;
  flex-basis: 33.3333%;
  padding-left: 11px;
  padding-right: 11px;
  @media (min-width: 768px) {
    flex-basis: 16.6667%;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (min-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Img = styled.img`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  ${Button}:hover & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
  ${Button}:focus & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
  padding: 13px;
  border-radius: 50%;
`;

const IconTitle = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 2px;
  text-transform: uppercase;
`;

export default props => {
  return (
    <Button>
      <Img alt={props.alt} src={props.img} />
      <IconTitle>{props.text}</IconTitle>
    </Button>
  );
};
