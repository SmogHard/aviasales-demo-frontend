import React, { Component, Fragment } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Agents = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

const Wrapper = styled.div`
  padding-top: 16px;
`;

const agents = [
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
    filterFrom: cloneDeep(agents),
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

  handleAllAgentsCheck = () => {
    this.setState(prevState => ({
      filterFrom: getAllCheck(prevState.filterFrom, !isAllCheck(prevState.filterFrom)),
    }));
  };

  handleAgentsCheck = (idx) => {
    this.setState(prevState => ({
      filterFrom: checkEl(prevState.filterFrom, idx),
    }));
  };

  render() {
    return (
      <Agents>
        <Filter title="Агенства" amount={14}>
          <Fragment>
            <Wrapper>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterFrom)}
                onChange={() => this.handleAllAgentsCheck()}
              />
              {this.state.filterFrom.map((item, i) => (
                <Checkbox
                  price={item.price}
                  check={item.checked}
                  label={item.label}
                  key={item.id}
                  onChange={() => this.handleAgentsCheck(i)}
                />
              ))}
            </Wrapper>
          </Fragment>
        </Filter>
      </Agents>
    );
  }
}

export default Airports;
