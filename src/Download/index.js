import React from "react";
import styled from "styled-components";
import apple from "./apple.png";
import windows from "./windows.png";
import android from "./Android.png";
import iphone from "./iphone.png";
import raiting from "./raiting.png";

const Section = styled.section`
  background: linear-gradient(to bottom, #00b0de 0%, #196ebd 100%);
  margin-top: 24px;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  padding-top: 24px;
`;

const P = styled.p`
  color: #ffffff;
  padding-left: 8px;
  font-size: 14px;
`;

const OsName = P.extend`
  margin: 0px;
  line-height: 25px;
`;

const Img = styled.img``;

const Rate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Apps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

const App = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0px 16px;

    &:first-child {
      padding-left: 0px;
    }
  }
`;

const AppWithBorder = App.extend`
  @media (min-width: 768px) {
    border-left: 1px solid #ffffff50;
    border-right: 1px solid #ffffff50;
  }
`;

const Offer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <Wrapper>
              <Img src={iphone} alt="Iphone" />
              <Offer>
                <Title>Скачай мобильное приложение Aviasales.ru</Title>
                <Rate>
                  <Img src={raiting} alt="Рейтинг" />{" "}
                  <P>Более 103 000 оценок</P>
                </Rate>
                <Apps>
                  <App>
                    <Img src={apple} alt="Рейтинг" />
                    <OsName>iPhone или iPad</OsName>
                  </App>
                  <AppWithBorder>
                    <Img src={android} alt="Рейтинг" /> <OsName>Android</OsName>
                  </AppWithBorder>
                  <App>
                    <Img src={windows} alt="Рейтинг" />
                    <OsName>Windows Phone</OsName>
                  </App>
                </Apps>
              </Offer>
            </Wrapper>
          </div>
        </div>
      </div>
    </Section>
  );
}
