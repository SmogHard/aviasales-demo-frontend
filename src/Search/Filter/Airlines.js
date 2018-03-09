import React, { Component, Fragment } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Airlines = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

const CheckboxTitle = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #323333;
  padding-bottom: 8px;
`;

const Wrapper = styled.div`
  padding-top: 16px;
`;

const Information = styled.p`
  font-size: 12px;
`;

const alliance = [
  {
    checked: true,
    label: 'One World',
    price: 7712,
    id: 2,
  },
  {
    checked: false,
    label: 'Star Alliance',
    price: 11712,
    id: 3,
  },
  {
    checked: true,
    label: 'Sky Dream',
    price: 23712,
    id: 4,
  },
];

const airlines = [
  {
    checked: true,
    label: 'Custom Company',
    price: 7712,
    id: 2,
  },
  {
    checked: false,
    label: 'Air Algerie',
    price: 11712,
    id: 3,
  },
  {
    checked: true,
    label: 'Alitalia',
    price: 23712,
    id: 4,
  },
  {
    checked: false,
    label: 'Bulgaria Air',
    price: 47712,
    id: 5,
  },
  {
    checked: true,
    label: 'Belle Air',
    price: 47712,
    id: 6,
  },
  {
    checked: false,
    label: 'Air Moldova',
    price: 47712,
    id: 7,
  },
  {
    checked: true,
    label: 'British',
    price: 47712,
    id: 8,
  },
];

const isAllCheck = filter => filter.every(el => el.checked);

const setCheck = (filter, checked) => ({ ...filter, checked });

const getAllCheck = (filter, check) => filter.map(item => setCheck(item, check));

const several = [{ checked: false }];

class AirlinesFilter extends Component {
  state = {
    filterAirlines: cloneDeep(airlines),
    filterAlliance: cloneDeep(alliance),
    filterSeveral: cloneDeep(several),
  };

  handleAllAllianceCheck = () => {
    this.setState(prevState => ({
      filterAlliance: getAllCheck(prevState.filterAlliance, !isAllCheck(prevState.filterAlliance)),
    }));
  };

  handleAllianceCheck = (idx) => {
    const filter = this.state.filterAlliance;
    filter[idx].checked = !filter[idx].checked;
    this.setState({
      filterAlliance: filter,
    });
  };

  handleAllAirlinesCheck = () => {
    this.setState(prevState => ({
      filterAirlines: getAllCheck(prevState.filterAirlines, !isAllCheck(prevState.filterAirlines)),
    }));
  };

  handleAirlineCheck = (idx) => {
    const filter = this.state.filterAirlines;
    filter[idx].checked = !filter[idx].checked;
    this.setState({
      filterAirlines: filter,
    });
  };

  handleAllSeveralCheck = () => {
    this.setState(prevState => ({
      filterSeveral: getAllCheck(prevState.filterSeveral, !isAllCheck(prevState.filterSeveral)),
    }));
  };

  render() {
    return (
      <Airlines>
        <Filter isOpen title="Авиакомпании" amount={42}>
          <Fragment>
            <Wrapper>
              <Checkbox
                label="Несколько авиакомпаний"
                check={isAllCheck(this.state.filterSeveral)}
                onChange={() => this.handleAllSeveralCheck()}
              />
            </Wrapper>
            <Information>
              Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая
              выбранную
            </Information>
            <Wrapper>
              <CheckboxTitle>Альянсы</CheckboxTitle>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterAlliance)}
                onChange={() => this.handleAllAllianceCheck()}
              />
              {this.state.filterAlliance.map((item, i) => (
                <Checkbox
                  price={item.price}
                  check={item.checked}
                  label={item.label}
                  key={item.id}
                  onChange={() => this.handleAllianceCheck(i)}
                />
              ))}
            </Wrapper>
            <Wrapper>
              <CheckboxTitle>Авиакомпании</CheckboxTitle>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterAirlines)}
                onChange={() => this.handleAllAirlinesCheck()}
              />
              {this.state.filterAirlines.map((item, i) => (
                <Checkbox
                  price={item.price}
                  check={item.checked}
                  label={item.label}
                  key={item.id}
                  onChange={() => this.handleAirlineCheck(i)}
                />
              ))}
            </Wrapper>
          </Fragment>
        </Filter>
      </Airlines>
    );
  }
}

export default AirlinesFilter;
