import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Title = styled.h1`
  color: #ffffff;
  text-align: left;
  font-weight: 500;
  padding-top: 16px;
  margin-top: 0px;
`;

const Section = styled.section`
  background: linear-gradient(to bottom, #00b0de 0%, #196ebd 100%);
`;

const P = styled.p``;

const CardFooter = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Link = styled.a`
  color: #ffffff;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <Title>Спецпредложения на авиабилеты</Title>
            <Cards />
            <CardFooter>
              <P>
                <Link href="#">Смотреть все спецпредложения</Link>
              </P>
              <P>* средняя цена по направлению</P>
            </CardFooter>
          </div>
        </div>
      </div>
    </Section>
  );
}
