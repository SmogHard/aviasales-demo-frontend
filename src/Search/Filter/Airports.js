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
];

const isAllCheck = filter => filter.every(el => el.checked);

const setCheck = (filter, checked) => ({ ...filter, checked });

const getAllCheck = (filter, check) => filter.map(item => setCheck(item, check));

const toggleChecked = o => ({ ...o, checked: !o.checked });

const checkEl = (arr, idx) => [
  ...arr.slice(0, idx),
  toggleChecked(arr[idx]),
  ...arr.slice(idx + 1),
];

class Airports extends Component {
  state = {
    filterFrom: cloneDeep(airlines),
    filterTo: cloneDeep(alliance),
  };

  handleAllAllianceCheck = () => {
    this.setState(prevState => ({
      filterTo: getAllCheck(prevState.filterTo, !isAllCheck(prevState.filterTo)),
    }));
  };

  handleAllianceCheck = (idx) => {
    this.setState(prevState => ({
      filterTo: checkEl(prevState.filterTo, idx),
    }));
  };

  handleAllAirlinesCheck = () => {
    this.setState(prevState => ({
      filterFrom: getAllCheck(prevState.filterFrom, !isAllCheck(prevState.filterFrom)),
    }));
  };

  handleAirlineCheck = (idx) => {
    this.setState(prevState => ({
      filterFrom: checkEl(prevState.filterFrom, idx),
    }));
  };

  render() {
    return (
      <Airlines>
        <Filter title="Аэропорты">
          <Fragment>
            <Wrapper>
              <CheckboxTitle>Вылет из Москвы</CheckboxTitle>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterTo)}
                onChange={() => this.handleAllAllianceCheck()}
              />
              {this.state.filterTo.map((item, i) => (
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
              <CheckboxTitle>Прибытие в Москву</CheckboxTitle>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterFrom)}
                onChange={() => this.handleAllAirlinesCheck()}
              />
              {this.state.filterFrom.map((item, i) => (
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

export default Airports;
