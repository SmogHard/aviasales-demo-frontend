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
  color: ${props => props.color};
  padding-top: ${props => props.paddingtop};
  padding-bottom: ${props => props.paddingbot};
  padding-left: ${props => props.paddingleft};
  font-size: ${props => props.fontsize};
  margin: ${props => props.margin};
`;

const Img = styled.img``;

const Wrapper = styled.div``;

const Rate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppWrap = styled.div`
  display: flex;
`;
const Apps = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const AppsBox = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    border-left: ${props => (props.border ? "1px solid #ffffff" : "")};
    border-right: ${props => (props.border ? "1px solid #ffffff" : "")};
    padding: 0px 16px;
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <Title>Скачай мобильное приложение Aviasales.ru</Title>
          <Rate>
            <Img src={raiting} alt="Рейтнг" />{" "}
            <P color="#ffffff" fontsize="14px" paddingleft="8px">
              Более 103 000 оценок
            </P>
          </Rate>
          <AppWrap>
            <Img src={iphone} alt="Iphone" />
            <Apps>
              <AppsBox>
                <Img src={apple} alt="Рейтнг" />{" "}
                <P color="#ffffff" fontsize="14px" paddingleft="8px">
                  iPhone или iPad
                </P>
              </AppsBox>
              <AppsBox border>
                <Img src={android} alt="Рейтнг" />{" "}
                <P color="#ffffff" fontsize="14px" paddingleft="8px">
                  Android
                </P>
              </AppsBox>
              <AppsBox>
                <Img src={windows} alt="Рейтнг" />{" "}
                <P color="#ffffff" fontsize="14px" paddingleft="8px">
                  Windows Phone
                </P>
              </AppsBox>
            </Apps>
          </AppWrap>
        </Wrapper>
      </div>
    </Section>
  );
}
