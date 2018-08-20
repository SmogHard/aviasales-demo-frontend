import React from 'react';
import styled from 'styled-components';
import arrowLeft from './arrowleft.png';
import arrowRight from './arrowright.png';
import aeroflot from './aeroflot.png';
import el from './el.png';
import korean from './korean.png';
import oneTrip from './onetrip.png';
import s7 from './s7.png';

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

const Slider = styled.div`
  margin-top: 75px;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Pagination = styled.div`
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

const Arrow = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
`;

const Airlines = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 100px;
  @media (min-width: 1200px) {
    padding-left: 0px;
  }
`;

const Company = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Image = styled.img``;

export default function () {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <Slider>
              <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
              <Carousel>
                <Arrow>
                  <Image src={arrowLeft} />
                </Arrow>
                <Airlines>
                  <Company>
                    <Image src={aeroflot} />
                  </Company>
                  <Company>
                    <Image src={s7} />
                  </Company>
                  <Company>
                    <Image src={oneTrip} />
                  </Company>
                  <Company>
                    <Image src={korean} />
                  </Company>
                  <Company>
                    <Image src={el} />
                  </Company>
                </Airlines>
                <Arrow>
                  <Image src={arrowRight} />
                </Arrow>
              </Carousel>
              <Pagination>
                <Dot /> <Dot /> <Dot />
              </Pagination>
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
}
