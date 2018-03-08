import React, { Component, Fragment } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Transfer = styled.div`
  padding: 16px 16px;
`;

const data = [
  {
    checked: true,
    label: 'Без пересадок',
    price: 7712,
    id: 2,
  },
  {
    checked: false,
    label: '1 пересадка',
    price: 11712,
    id: 3,
  },
  {
    checked: false,
    label: '2 пересадки',
    price: 23712,
    id: 4,
  },
  {
    checked: false,
    label: '3 пересадки',
    price: 47712,
    id: 5,
  },
];

const setCheck = (filter, checked) => ({ ...filter, checked });

const isAllCheck = filter => filter.every(el => el.checked);

const getAllCheck = (filter, check) => filter.map(item => setCheck(item, check));

const elChecked = object => ({ ...object, checked: !object.checked });

const checkEl = (arr, idx) => [...arr.slice(0, idx), elChecked(arr[idx]), ...arr.slice(idx + 1)];

class TransferFilter extends Component {
  state = {
    filters: cloneDeep(data),
  };

  handleAllCheck = () => {
    this.setState(prevState => ({
      filters: getAllCheck(prevState.filters, !isAllCheck(prevState.filters)),
    }));
  };

  handleCheck = (idx) => {
    this.setState(prevState => ({
      filters: checkEl(prevState.filters, idx),
    }));
  };

  handleClear = () => {
    this.setState(prevState => ({
      filters: getAllCheck(prevState.filters, true),
    }));
  };

  render() {
    return (
      <Transfer>
        <Filter
          title="Пересадки"
          isOpen
          isVisibleClear={!isAllCheck(this.state.filters)}
          onClearClick={this.handleClear}
        >
          <Fragment>
            <Checkbox
              label="Все"
              check={isAllCheck(this.state.filters)}
              onChange={() => this.handleAllCheck()}
            />
            {this.state.filters.map((item, i) => (
              <Checkbox
                check={item.checked}
                price={item.price}
                label={item.label}
                key={item.id}
                onChange={() => this.handleCheck(i)}
              />
            ))}
          </Fragment>
        </Filter>
      </Transfer>
    );
  }
}

export default TransferFilter;
