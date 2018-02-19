import React from "react";
import styled from "styled-components";
import Tickets from "./Tickets";
const Section = styled.section`
  background: #eaeaea;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Tickets />
          </div>
        </div>
      </div>
    </Section>
  );
}
