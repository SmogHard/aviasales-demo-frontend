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

class Airports extends Component {
  state = {
    filterAgent: cloneDeep(agents),
  };

  handleAllAgentsCheck = () => {
    this.setState(prevState => ({
      filter: getAllCheck(prevState.filterFrom, !isAllCheck(prevState.filterFrom)),
    }));
  };

  handleAgentsCheck = (idx) => {
    const filter = this.state.filterAgent;
    filter[idx].checked = !filter[idx].checked;
    this.setState({
      filterAgent: filter,
    });
  };

  render() {
    return (
      <Agents>
        <Filter title="Агенства" amount={14}>
          <Fragment>
            <Wrapper>
              <Checkbox
                label="Все"
                check={isAllCheck(this.state.filterAgent)}
                onChange={() => this.handleAllAgentsCheck()}
              />
              {this.state.filterAgent.map((item, i) => (
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
