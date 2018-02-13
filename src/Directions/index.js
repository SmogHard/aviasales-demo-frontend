import React from "react";
import styled from "styled-components";
import compass from "./Group.svg";
import pen from "./Shape.png";
import world from "./world.svg";
import coctail from "./coctail.svg";
import children from "./children.svg";
import holiday from "./holiday.svg";
import history from "./history.svg";
import shoping from "./shoping.svg";
import krasnodar from "./krasnodar.png";
import minvod from "./minvod.png";
import sochi from "./sochi.png";
import simph from "./simph.png";
import barselona from "./barselona.png";
import saintp from "./saintp.png";

const Section = styled.section`
  background: #f8fcff;
  text-align: center;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Box = styled.button`
  cursor: pointer;
  justify-content: center;
  margin-bottom: 21px;
  background: transparent;
  border: 0;
  outline: none;
  border-bottom: 1px solid transparent;
  color: #00ace2;
  &:hover,
  &:focus {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
`;

const IconTitle = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 2px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  margin-top: 16px;
`;

const CardImg = styled.div`
  background-image: url(${props => props.img});
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 176px;
`;

const CardBlock = styled.div`
  background: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const P = styled.p`
  color: ${props => props.color};
  fontsize: ${props => props.fontsize};
  font-weight: ${props => (props.bold ? 700 : 400)};
`;

const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`;

const TextBox = styled.div`
  text-align: ${props => props.align};
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
  backgroud: #ffffff;
`;

const ButtonList = styled.div`
  margin-top: 32px;
`;

const Link = styled.a`
  color: ${props => props.color};
  fontsize: ${props => props.fontsize};
  margin-top: 16px;
  margin-bottom: 16px;
  text-decoration: none;
`;

const WrapperContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 8.3333%;
    margin-right: 8.3333%;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: #ffffff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  ${Box}:hover & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <WrapperContainer>
          <div className="row">
            <div className="col-xs-12">
              <Img alt="compass" src={compass} margin="40px 0 24px 0" />
            </div>
            <div className="col-xs-12">
              <TitleWrap>
                <div className="col-xs-10">
                  <Title>
                    Популярные направления перелетов из города{" "}
                    <ButtonAction color="#00ACE2">
                      Москва <Img alt="pen" src={pen} />
                    </ButtonAction>
                  </Title>
                </div>
              </TitleWrap>
            </div>
          </div>
          <ButtonList>
            <div className="row">
              <div className="col-xs-4 col-sm-2">
                <Box>
                  <Circle>
                    <Img alt="world" src={world} />
                  </Circle>
                  <IconTitle>КУДА УГОДНО</IconTitle>
                </Box>
              </div>
              <div className="col-xs-4 col-sm-2">
                <Box>
                  <Circle>
                    <Img alt="holiday" src={holiday} />{" "}
                  </Circle>
                  <IconTitle>СОЛНЦЕ И МОРЕ</IconTitle>
                </Box>
              </div>
              <div className="col-xs-4 col-sm-2">
                <Box>
                  <Circle>
                    <Img alt="shoping" src={shoping} />
                  </Circle>
                  <IconTitle>ШОППИНГ, ГОРОД</IconTitle>
                </Box>
              </div>
              <div className="col-xs-4 col-sm-2">
                <Box>
                  <Circle>
                    <Img alt="history" src={history} />
                  </Circle>
                  <IconTitle>КУЛЬТУРА И ИСТОРИЯ</IconTitle>
                </Box>
              </div>
              <div className="col-xs-4 col-sm-2">
                <Box>
                  <Circle>
                    <Img alt="coctail" src={coctail} />
                  </Circle>
                  <IconTitle>НОЧНАЯ ЖИЗНЬ</IconTitle>
                </Box>
              </div>
              <div className="col-xs-4 col-sm-2">
                <Box>
                  <Circle>
                    <Img alt="children" src={children} />
                  </Circle>
                  <IconTitle>ОТДЫХ С ДЕТЬМИ</IconTitle>
                </Box>
              </div>
            </div>
          </ButtonList>
          <div>
            <div className="row">
              <div className="col-xs-12 col-md-12 col-lg-6">
                <Card>
                  <CardImg img={krasnodar} />
                  <CardBlock>
                    <div className="row">
                      <div className="col-xs-6">
                        <TextBox align="left" marginleft="16px">
                          <P bold>Краснодар</P>
                          <P fontsize="12px" color="#A0B0B9">
                            РОССИЯ
                          </P>
                        </TextBox>
                      </div>
                      <div className="col-xs-6">
                        <TextBox align="right" marginright="16px">
                          <p>
                            <Link href="#" color="#00BAE8">
                              Найти от 1 212 ₽
                            </Link>
                          </p>
                          <P fontsize="12px" color="#A0B0B9">
                            18 марта
                          </P>
                        </TextBox>
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <Card>
                  <CardImg img={sochi} />
                  <CardBlock>
                    <div className="row">
                      <div className="col-xs-6">
                        <TextBox align="left" marginleft="16px">
                          <P bold>Cочи (Адлер)</P>
                          <P fontsize="12px" color="#A0B0B9">
                            РОССИЯ
                          </P>
                        </TextBox>
                      </div>
                      <div className="col-xs-6">
                        <TextBox align="right" marginright="16px">
                          <p>
                            <Link href="#" color="#00BAE8">
                              Найти от 1 344 ₽
                            </Link>
                          </p>
                          <P fontsize="12px" color="#A0B0B9">
                            27 марта
                          </P>
                        </TextBox>
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <Card>
                  <CardImg img={saintp} />
                  <CardBlock>
                    <div className="row">
                      <div className="col-xs-6">
                        <TextBox align="left" marginleft="16px">
                          <P bold>Санкт - Петербург</P>
                          <P fontsize="12px" color="#A0B0B9">
                            РОССИЯ
                          </P>
                        </TextBox>
                      </div>
                      <div className="col-xs-6">
                        <TextBox align="right" marginright="16px">
                          <p>
                            <Link href="#" color="#00BAE8">
                              Найти от 1 508 ₽
                            </Link>
                          </p>
                          <P fontsize="12px" color="#A0B0B9">
                            19 февраля
                          </P>
                        </TextBox>
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <Card>
                  <CardImg img={minvod} />
                  <CardBlock>
                    <div className="row">
                      <div className="col-xs-6">
                        <TextBox align="left" marginleft="16px">
                          <P bold>Минеральные воды</P>
                          <P fontsize="12px" color="#A0B0B9">
                            РОССИЯ
                          </P>
                        </TextBox>
                      </div>
                      <div className="col-xs-6">
                        <TextBox align="right" marginright="16px">
                          <p>
                            <Link href="#" color="#00BAE8">
                              Найти от 2 074 ₽
                            </Link>
                          </p>
                          <P fontsize="12px" color="#A0B0B9">
                            13 марта
                          </P>
                        </TextBox>
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <Card>
                  <CardImg img={simph} />
                  <CardBlock>
                    <div className="row">
                      <div className="col-xs-6">
                        <TextBox align="left" marginleft="16px">
                          <P bold>Симферополь (Крым)</P>
                          <P fontsize="12px" color="#A0B0B9">
                            КРЫМ
                          </P>
                        </TextBox>
                      </div>
                      <div className="col-xs-6">
                        <TextBox align="right" marginright="16px">
                          <p>
                            <Link href="#" color="#00BAE8">
                              Найти от 2 047 ₽
                            </Link>
                          </p>
                          <P fontsize="12px" color="#A0B0B9">
                            13 марта
                          </P>
                        </TextBox>
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <Card>
                  <CardImg img={barselona} />
                  <CardBlock>
                    <div className="row">
                      <div className="col-xs-6">
                        <TextBox align="left" marginleft="16px">
                          <P bold>Барселона</P>
                          <P fontsize="12px" color="#A0B0B9">
                            Испания
                          </P>
                        </TextBox>
                      </div>
                      <div className="col-xs-6">
                        <TextBox align="right" marginright="16px">
                          <p>
                            <Link href="#" color="#00BAE8">
                              Найти от 4 247 ₽
                            </Link>
                          </p>
                          <P fontsize="12px" color="#A0B0B9">
                            24 марта
                          </P>
                        </TextBox>
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </Section>
  );
}
