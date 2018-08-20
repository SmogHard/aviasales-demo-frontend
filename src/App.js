import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Search from './Search';
import './App.css';
import { localization } from './Search/Tickets/data';

const data = [
  {
    city: 'Barselona',
    country: 'Spain',
    abbr: 'BAR',
    id: 0,
  },
  {
    city: 'Moscow',
    country: 'Russia',
    abbr: 'MOW',
    id: 1,
  },
  {
    city: 'Berlin',
    country: 'Germany',
    abbr: 'BER',
    id: 2,
  },
  {
    city: 'Pekin',
    country: 'China',
    abbr: 'PEK',
    id: 3,
  },
];

class App extends Component {
  state = {
    from: null,
    to: null,
    isOpenTo: false,
    isOpenFrom: false,
    departIsOpen: false,
    arrivalIsOpen: false,
    depart: {
      city: '',
      abbr: '',
    },
    arrival: {
      city: '',
      abbr: '',
    },
    passenger: 1,
    adults: 1,
    kids: 0,
    baby: 0,
    bussines: false,
    isOpenPassenger: false,
    category: {
      label: 'Бизнес класс',
      checked: false,
    },
  };

  onClickOutside = (...args) => {
    this.setState(() => args.reduce((filter, name) => ({ ...filter, [name]: false }), {}));
  };

  onToogle = () => {
    this.setState(prevState => ({
      isOpenPassenger: !prevState.isOpenPassenger,
    }));
  };

  setDay = (direction, isOpen, day) => {
    this.setState({
      [direction]: day,
      [isOpen]: false,
    });
  };

  showDate = (to, from) => {
    this.setState({
      isOpenTo: to,
      isOpenFrom: from,
    });
  };

  clearDate = (direction) => {
    this.setState({
      [direction]: null,
    });
  };

  handleCityChange = (direction, idx, isOpen) => {
    this.setState({
      [direction]: {
        city: localization.city[data[idx].city],
        abbr: data[idx].abbr,
      },
      [isOpen]: false,
    });
  };

  handleChange = (event, direction, isOpen) => {
    this.setState({
      [direction]: {
        city: event.target.value,
        abbr: '',
      },
      [isOpen]: true,
    });
  };

  handleSwap = () => {
    this.setState(prevState => ({
      depart: prevState.arrival,
      arrival: prevState.depart,
    }));
  };

  handleChangeGrade = () => {
    this.setState(prevState => ({
      bussines: !prevState.bussines,
      category: { ...prevState.category, checked: !prevState.category.checked },
    }));
  };

  handleCount = (count, counter) => {
    this.setState(prevState => ({
      passenger: prevState.passenger + count,
      [counter]: prevState[counter] + count,
    }));
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <Main
              from={this.state.from}
              to={this.state.to}
              isOpenTo={this.state.isOpenTo}
              isOpenFrom={this.state.isOpenFrom}
              setDay={this.setDay}
              showDate={this.showDate}
              clearDate={this.clearDate}
              onClickOutside={this.onClickOutside}
              departIsOpen={this.state.departIsOpen}
              arrivalIsOpen={this.state.arrivalIsOpen}
              depart={this.state.depart}
              arrival={this.state.arrival}
              handleChange={this.handleChange}
              handleSwap={this.handleSwap}
              handleCityChange={this.handleCityChange}
              passenger={this.state.passenger}
              adults={this.state.adults}
              kids={this.state.kids}
              baby={this.state.baby}
              bussines={this.state.bussines}
              onToogle={this.onToogle}
              isOpenPassenger={this.state.isOpenPassenger}
              handleChangeGrade={this.handleChangeGrade}
              handleCount={this.handleCount}
              category={this.state.category}
            />
          )}
        />
        <Route
          path="/search"
          component={() => (
            <Search
              from={this.state.from}
              to={this.state.to}
              isOpenTo={this.state.isOpenTo}
              isOpenFrom={this.state.isOpenFrom}
              setDay={this.setDay}
              showDate={this.showDate}
              clearDate={this.clearDate}
              onClickOutside={this.onClickOutside}
              departIsOpen={this.state.departIsOpen}
              arrivalIsOpen={this.state.arrivalIsOpen}
              depart={this.state.depart}
              arrival={this.state.arrival}
              handleChange={this.handleChange}
              handleSwap={this.handleSwap}
              handleCityChange={this.handleCityChange}
              passenger={this.state.passenger}
              adults={this.state.adults}
              kids={this.state.kids}
              baby={this.state.baby}
              bussines={this.state.bussines}
              onToogle={this.onToogle}
              isOpenPassenger={this.state.isOpenPassenger}
              handleChangeGrade={this.handleChangeGrade}
              handleCount={this.handleCount}
              category={this.state.category}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
