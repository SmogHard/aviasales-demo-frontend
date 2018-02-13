import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.png";
import luft from "./luft.png";
import sign from "./sign.png";

const Title = styled.h1`
  color: #ffffff;
  text-align: left;
  font-weight: 500;
  padding-top: 16px;
`;

const Section = styled.section`
  background: linear-gradient(to bottom, #00b0de 0%, #196ebd 100%);
  margin-top: 40px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  @media (min-width: 768px) {
    margin-left: ${props => props.marginleft};
    margin-right: ${props => props.marginright};
  }
`;

const CardHeader = styled.div`
  background: #cd2027;
  color: #ffffff;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  color: ${props => props.color};
  padding-top: ${props => props.paddingtop};
  padding-bottom: ${props => props.paddingbot};
  padding-left: ${props => props.paddingleft};
  font-size: ${props => props.fontsize};
  margin: ${props => props.margin};
`;

const CardSection = styled.div`
  display: flex;
  background: #ffffff;
  padding-left: 8px;
  padding-right: 8px;
  text-align: left;
  flex-direction: column;
`;

const CardButton = styled.button`
  width: 100%;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 27px;
  margin-bottom: 16px;
  background: #ffffff;
  font-size: 16px;
  color: #d93533;
`;

const CardOffer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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

const OfferText = styled.div`
  text-align: right;
`;

const Span = styled.span`
  font-size: 12px;
`;

const Img = styled.img`
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
`;

const Link = styled.a`
  color: #ffffff;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <Title>Спецпредложения на авиабилеты</Title>
        <CardBox>
          <CardWrap>
            <CardHeader>
              <P
                paddingtop="22px"
                paddingbot="21px"
                paddingleft="16px"
                margin="0px"
              >
                Билеты от 499 рублей!
              </P>
              <Img alt="" src="" />
            </CardHeader>
            <CardSection>
              <CardOffer>
                <Img alt="pobeda" src={pobeda} />
                <OfferText>
                  <P fontsize="20px" color="#5C5C5C">
                    <Span>от </Span> 499 ₽
                  </P>
                  <P fontsize="12px" color="#D93633">
                    Осталось 45 дней
                  </P>
                </OfferText>
              </CardOffer>
              <P fontsize="12px" margin="0px">
                Билеты от 499 рублей!<br /> Специальное предложение от
                авиакомпании Победа
              </P>
              <CardButton>Узнать подробности</CardButton>
            </CardSection>
          </CardWrap>
          <CardWrap marginleft="16px" marginright="16px">
            <CardHeader>
              <P
                paddingtop="22px"
                paddingbot="21px"
                paddingleft="16px"
                margin="0px"
              >
                Билеты от 499 рублей!
              </P>
              <Img marginright="16px" alt="" src={sign} />
            </CardHeader>
            <CardSection>
              <CardOffer>
                <Img alt="pobeda" src={luft} />
                <OfferText>
                  <P fontsize="20px" color="#5C5C5C">
                    <Span>от </Span> 499 ₽
                  </P>
                  <P fontsize="12px" color="#D93633">
                    Осталось 45 дней
                  </P>
                </OfferText>
              </CardOffer>
              <P fontsize="12px" margin="0px">
                Билеты от 499 рублей!<br /> Специальное предложение от
                авиакомпании Победа
              </P>
              <CardButton>Узнать подробности</CardButton>
            </CardSection>
          </CardWrap>
          <CardWrap>
            <CardHeader>
              <P
                paddingtop="22px"
                paddingbot="21px"
                paddingleft="16px"
                margin="0px"
              >
                Билеты от 499 рублей!
              </P>
              <Img marginright="16px" alt="" src={sign} />
            </CardHeader>
            <CardSection>
              <CardOffer>
                <Img alt="pobeda" src={luft} />
                <OfferText>
                  <P fontsize="20px" color="#5C5C5C">
                    <Span>от </Span> 499 ₽
                  </P>
                  <P fontsize="12px" color="#D93633">
                    Осталось 45 дней
                  </P>
                </OfferText>
              </CardOffer>
              <P fontsize="12px" margin="0px">
                Билеты от 499 рублей!<br /> Специальное предложение от
                авиакомпании Победа
              </P>
              <CardButton>Узнать подробности</CardButton>
            </CardSection>
          </CardWrap>
        </CardBox>
        <CardFooter>
          <P>
            <Link href="#">Смотреть все спецпредложения</Link>
          </P>
          <P>* средняя цена по направлению</P>
        </CardFooter>
      </div>
    </Section>
  );
}
