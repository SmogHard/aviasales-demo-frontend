import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from './arrow.svg';
import clear from './clear.svg';

const Filter = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
`;

const ArrowOpen = styled.img`
  margin-right: 16px;
  ${({ isOpen }) => isOpen && 'transform: rotate(90deg);'};
`;

const Arrow = ({ isOpen }) => <ArrowOpen isOpen={isOpen} src={arrow} alt="" />;

Arrow.propTypes = {
  isOpen: PropTypes.bool,
};

Arrow.defaultProps = {
  isOpen: false,
};

const Header = ({ children, isOpen, onClick }) => (
  <Filter onClick={onClick}>
    <Arrow isOpen={isOpen} />
    {children}
  </Filter>
);

const Title = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  color: rgb(91, 91, 92);
`;

Header.defaultProps = {
  isOpen: false,
  onClick: undefined,
  children: undefined,
};

Header.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

const Amount = styled.span`
  color: #a0b0b9;
  padding-left: 8px;
`;

const Clear = styled.img`
  position: absolute;
  right: 0;
  cursor: pointer;
  border: none;
`;

class Section extends React.Component {
  static defaultProps = {
    isOpen: false,
    title: '',
    amount: undefined,
    isVisibleClear: false,
    onClearClick: undefined,
    children: undefined,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    amount: PropTypes.number,
    isVisibleClear: PropTypes.bool,
    children: PropTypes.element,
    onClearClick: PropTypes.func,
  };

  state = { isOpen: this.props.isOpen };

  handleClick = (e) => {
    if (!e.defaultPrevented) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  };

  render() {
    return (
      <div>
        <Header isOpen={this.state.isOpen} onClick={this.handleClick}>
          <Fragment>
            <Title>{this.props.title}</Title>
            {this.props.amount && <Amount>{this.props.amount}</Amount>}
            {this.props.isVisibleClear && (
              <Clear
                src={clear}
                onClick={(e) => {
                  e.preventDefault();
                  if (this.props.onClearClick) this.props.onClearClick(e);
                }}
              />
            )}
          </Fragment>
        </Header>
        {this.state.isOpen && this.props.children}
      </div>
    );
  }
}

const FilterSection = styled(Section)`
  padding 2rem;
  border-bottom: 1px solid #dddddd;
  &:last-child {
    border-bottom: none;
  }
`;

export default FilterSection;
