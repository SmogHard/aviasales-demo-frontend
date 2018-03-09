import React, { Component, Fragment } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Transfer = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

const Checkboxes = styled.div`
  padding-top: 16px;
`;

const data = [
  {
    checked: true,
    label: 'Без багажа',
    price: 7712,
    id: 2,
  },
  {
    checked: true,
    label: 'Ручная кладь',
    price: 11712,
    id: 3,
  },
];

const setCheck = (filter, checked) => ({ ...filter, checked });

const isAllCheck = filter => filter.every(el => el.checked);

const getAllCheck = (filter, check) => filter.map(item => setCheck(item, check));

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
    const filter = this.state.filters;
    filter[idx].checked = !filter[idx].checked;
    this.setState({
      filters: filter,
    });
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
          title="Багаж"
          isVisibleClear={!isAllCheck(this.state.filters)}
          onClearClick={this.handleClear}
        >
          <Fragment>
            <Checkboxes>
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
            </Checkboxes>
          </Fragment>
        </Filter>
      </Transfer>
    );
  }
}

export default TransferFilter;
