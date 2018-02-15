import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Types from "./Types";
import Cards from "./Cards";

const Section = styled.section`
  background: #f8fcff;
  text-align: center;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Title />
            <Types />
            <Cards />
          </div>
        </div>
      </div>
    </Section>
  );
}
