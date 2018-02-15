import React from "react";
import styled from "styled-components";
import arrowleft from "./arrowleft.png";
import arrowright from "./arrowright.png";
import aeroflot from "./aeroflot.png";
import el from "./el.png";
import korean from "./korean.png";
import onetrip from "./onetrip.png";
import s7 from "./s7.png";

const Section = styled.section`
  background: #ffffff;
  margin-top: 24px;
  text-align: center;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  color: #5c5c5c;
  font-size: 32px;
  line-height: 40px;
`;

const Wrapper = styled.div`
  margin-top: 75px;
`;

const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const DotsWrap = styled.div`
  text-align: center;
`;

const Dot = styled.label`
  display: inline-block;
  width: 10px;
  height: 10px;
  color: #818181;
  border: 1px solid currentColor;
  margin: 0 8px 0 0;
  cursor: pointer;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  border-radius: 50%;

  &:hover {
    background: #818181;
  }
`;

const ButtonArrow = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
`;

const SliderCompany = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SliderImg = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Img = styled.img``;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <Wrapper>
              <Title>
                Дешевые авиабилеты от крупнейших авиакомпаний и агентств
              </Title>
              <Slider>
                <ButtonArrow>
                  <Img src={arrowleft} />
                </ButtonArrow>
                <div className="col-xs-offset-1 col-xs-10">
                  <SliderCompany>
                    <SliderImg>
                      <Img src={aeroflot} />
                    </SliderImg>
                    <SliderImg>
                      <Img src={s7} />
                    </SliderImg>
                    <SliderImg>
                      <Img src={onetrip} />
                    </SliderImg>
                    <SliderImg>
                      <Img src={korean} />
                    </SliderImg>
                    <SliderImg>
                      <Img src={el} />
                    </SliderImg>
                  </SliderCompany>
                </div>
                <ButtonArrow>
                  <Img src={arrowright} />
                </ButtonArrow>
              </Slider>
              <DotsWrap>
                <Dot /> <Dot /> <Dot />
              </DotsWrap>
            </Wrapper>
          </div>
        </div>
      </div>
    </Section>
  );
}
