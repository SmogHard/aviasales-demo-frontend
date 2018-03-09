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

const depart = [
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

const arrival = [
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

class Airports extends Component {
  state = {
    filterFrom: cloneDeep(depart),
    filterTo: cloneDeep(arrival),
  };

  handleAllDepartCheck = () => {
    this.setState(prevState => ({
      filterTo: getAllCheck(prevState.filterTo, !isAllCheck(prevState.filterTo)),
    }));
  };

  handleDepartCheck = (idx) => {
    const filter = this.state.filterTo;
    filter[idx].checked = !filter[idx].checked;
    this.setState({
      filterTo: filter,
    });
  };

  handleAllArrivalCheck = () => {
    this.setState(prevState => ({
      filterFrom: getAllCheck(prevState.filterFrom, !isAllCheck(prevState.filterFrom)),
    }));
  };

  handleArrivalCheck = (idx) => {
    const filter = this.state.filterFrom;
    filter[idx].checked = !filter[idx].checked;
    this.setState({
      filterFrom: filter,
    });
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
                onChange={() => this.handleAllDepartCheck()}
              />
              {this.state.filterTo.map((item, i) => (
                <Checkbox
                  price={item.price}
                  check={item.checked}
                  label={item.label}
                  key={item.id}
                  onChange={() => this.handleDepartCheck(i)}
                />
              ))}
            </Wrapper>
            <Wrapper>
              <CheckboxTitle>Прибытие в Москву</CheckboxTitle>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterFrom)}
                onChange={() => this.handleAllArrivalCheck()}
              />
              {this.state.filterFrom.map((item, i) => (
                <Checkbox
                  price={item.price}
                  check={item.checked}
                  label={item.label}
                  key={item.id}
                  onChange={() => this.handleArrivalCheck(i)}
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
