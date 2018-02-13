import React from "react";
import styled from "styled-components";
import facebook from "./facebook.png";
import vk from "./vk.png";
import rss from "./rss.png";
import twitter from "./twitter.png";
import candy from "./candy.png";

const Section = styled.section`
  background: #ffffff;
  position: relative;
  margin-top: 24px;
  text-align: center;
  &:after {
    content: "";
    display: block;
    background: #fff repeat-x url(${candy}) 50% 0;
    height: 9px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Title = styled.h4`
  color: #5c5c5c;
  margin-top: 0px;
  padding-top: 32px;
  font-size: 16px;
  line-height: 20px;
`;

const P = styled.p`
  color: ${props => props.color};
  padding-top: ${props => props.paddingtop};
  padding-bottom: ${props => props.paddingbot};
  padding-left: ${props => props.paddingleft};
  font-size: ${props => props.fontsize};
  margin: ${props => props.margin};
  line-heigth: 22px;
`;

const Wrapper = styled.div`
  margin-top: 75px;
`;

const Social = styled.div`
  display: flex;
  margin-left: 3px;
  margin-right: 3px;
`;

const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img``;

const Input = styled.input`
  padding: 6px 9px 6px 13px;
  line-height: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  line-height: 20px;
  background: #ff8e41;
  color: #ffffff;
  border: 0;
  padding: 8px 20px 8px 20px;
`;

const EmailForm = styled.form``;

const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const WrapperContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 24.6666%;
    margin-right: 24.6666%;
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <WrapperContainer>
          <Wrapper>
            <Title>Хотите знать всё о скидках на авиабилеты?</Title>
            <P>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </P>
            <SocialWrap>
              <Social>
                <Img src={twitter} />
              </Social>
              <Social>
                <Img src={facebook} />
              </Social>
              <Social>
                <Img src={vk} />
              </Social>
              <Social>
                <Img src={rss} />
              </Social>
            </SocialWrap>
            <FormWrap>
              <EmailForm>
                <Input placeholder="Ваш email" />
                <Button>Подписаться</Button>
              </EmailForm>
            </FormWrap>
          </Wrapper>
        </WrapperContainer>
      </div>
    </Section>
  );
}
