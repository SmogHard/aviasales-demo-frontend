import React from "react";
import styled from "styled-components";
import apple from "./apple.png";
import windows from "./windows.png";
import android from "./Android.png";
import iphone_xs from "./iphone-xs.png";
import iphone_md from "./iphone-md.png";
import raiting from "./raiting.png";

const Section = styled.section`
  background: linear-gradient(to bottom, #00b0de 0%, #196ebd 100%);
  margin-top: 24px;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 48px;
  }
  @media (min-width: 1200px) {
    margin-top: 40px;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  padding-top: 24px;
  line-height: 28px;
  margin: 0px;
  @media (min-width: 768px) {
    padding-top: 46px;
    text-align: left;
  }
  @media (min-width: 992px) {
    padding-top: 66px;
  }
`;

const Text = styled.p`
  color: #ffffff;
  padding-left: 8px;
  font-size: 14px;
  line-height: 20px;
  margin: 0px;
`;

const OsName = Text.extend`
  margin: 0px;
  line-height: 25px;
`;

const Image = styled.img``;

const Stars = Image.extend`
  margin-bottom: 1px;
`;

const Iphone = Image.extend`
  height: 213px;
  width: 162px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  @media screen and (min-width: 768px) {
    height: 312px;
    width: 237px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Apps = styled.div`
  padding-top: 56px;
  padding-bottom: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-bottom: 51px;
    padding-top: 40px;
  }
  @media (min-width: 992px) {
    padding-top: 43px;
    padding-bottom: 65px;
  }
`;

const App = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
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

const MobileAppShow = styled.div`
  height: 100%;
  position: relative;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row center-xs left-md">
          <div className="col-xs-12 col-md col-md-offset-4">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <Stars src={raiting} alt="Рейтинг" />
              <Text>Более 103 000 оценок</Text>
            </Rating>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4 col-xl-3 col-xl-offset-1">
            <MobileAppShow>
              <picture>
                <source srcSet={iphone_md} media="(min-width: 768px)" />
                <Iphone src={iphone_xs} alt="Iphone" />
              </picture>
            </MobileAppShow>
          </div>
          <div className="col-xs-6 col-md-8 col-xl">
            <Apps>
              <App>
                <Image src={apple} alt="iOS" />
                <OsName>iPhone или iPad</OsName>
              </App>
              <AppWithBorder>
                <Image src={android} alt="Android" /> <OsName>Android</OsName>
              </AppWithBorder>
              <App>
                <Image src={windows} alt="Windows Phone" />
                <OsName>Windows Phone</OsName>
              </App>
            </Apps>
          </div>
        </div>
      </div>
    </Section>
  );
}
