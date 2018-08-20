import React from 'react';
import styled from 'styled-components';
import facebook from './facebook.png';
import vk from './vk.png';
import rss from './rss.png';
import twitter from './twitter.png';
import candy from './candy.png';

const Section = styled.section`
  background: #ffffff;
  position: relative;
  margin-top: 24px;
  text-align: center;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Candy = styled.div`
  content: '';
  display: block;
  background: #fff repeat-x url(${candy}) 50% 0;
  height: 7px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const Title = styled.h4`
  color: #5c5c5c;
  margin-top: 0px;
  padding-top: 32px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 4px;
  @media (min-width: 1200px) {
    padding-top: 42px;
  }
`;

const Info = styled.p`
  font-size: 16px;
  color: #5c5c5c;
  line-height: 22px;
  margin-top: 0px;
  @media (min-width: 1200px) {
    padding-right: 125px;
  }
`;

const Newsletter = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    padding-bottom: 8px;
  }
`;

const Icon = styled.div`
  display: flex;
  margin-left: 3px;
  margin-right: 3px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1200px) {
    margin-right: 16px;
  }
`;

const Input = styled.input`
  padding: 6px 9px 6px 13px;
  line-height: 20px;
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  line-height: 20px;
  background: #ff8e41;
  color: #ffffff;
  border: 0;
  padding: 8px 20px 8px 20px;
`;

const Email = styled.form`
  padding-bottom: 61px;
  @media (min-width: 1200px) {
    padding-bottom: 0px;
    display: flex;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`;

const Offer = styled.div`
  text-align: center;
  @media (min-width: 1200px) {
    text-align: left;
    flex-basis: 50%;
  }
`;

const SocialAndSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    flex-basis: 50%;
    justify-content: space-around;
    align-items: start;
    padding-top: 42px;
  }
`;

export default function () {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-xl-offset-1 col-xl-10">
            <Candy />
            <Newsletter>
              <Offer>
                <Title>Хотите знать всё о скидках на авиабилеты?</Title>
                <Info>
                  Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.
                </Info>
              </Offer>
              <SocialAndSubscribe>
                <Social>
                  <Icon>
                    <img src={twitter} alt="Твиттер" />
                  </Icon>
                  <Icon>
                    <img src={facebook} alt="Фэйсбук" />
                  </Icon>
                  <Icon>
                    <img src={vk} alt="Вконтакте" />
                  </Icon>
                  <Icon>
                    <img src={rss} alt="RSS-канал" />
                  </Icon>
                </Social>
                <SubscribeForm>
                  <Email>
                    <Input placeholder="Ваш email" />
                    <Button>Подписаться</Button>
                  </Email>
                </SubscribeForm>
              </SocialAndSubscribe>
            </Newsletter>
          </div>
        </div>
      </div>
    </Section>
  );
}
