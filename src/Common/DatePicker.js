import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import styled from 'styled-components';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { withClickOutside } from 'react-clickoutside';
import 'react-day-picker/lib/style.css';
import './datepicker.css';
import calendar from './calendar.svg';
import Checkbox from './SpecialCheckbox';

const DateSelect = styled.div`
  flex-basis: 50%;
`;
const Img = styled.img``;

const Input = styled.input`
  background: none;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  ::placeholder {
    color: #a0b0b9;
  }

  @media (min-width: 768px) {
    width: 70%;
    text-overflow: ellipsis;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
`;

const Layout = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 16.666667%;
  }
`;

const DateFields = Layout.extend`
  position: relative;
  display: flex;
  @media (min-width: 1200px) {
    flex-basis: 100%;
  }
`;

const Picker = styled.div`
  background: #fff;
  border: none;
  border-radius: 5px;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

const Departures = InputWrapper.extend`
  position: relative;
  @media (min-width: 768px) {
    border-bottom-left-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const Arrival = InputWrapper.extend`
  position: relative;
`;

const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 16px;
`;

const CheckOneDirection = styled.div`
  padding: 18px 26px;
`;

const Day = styled.div`
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  width: 35px;
  padding-top: 4px;
  z-index: 10;
`;

const Price = styled.p`
  margin: 0;
  font-size: 10px;
  padding-top: 2px;
  text-align: center;
  color: #00c455;
`;

const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const PickerWithOutside = withClickOutside()(Picker);

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const WEEKDAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const LABELS = {
  nextMonth: 'следующий месяц',
  previousMonth: 'предыдущий месяц',
};

const prices = {
  25: ['43 606'],
  26: ['43 606'],
  27: ['42 606'],
  28: ['41 387'],
};

function dateFormat(day) {
  if (day) {
    return format(new Date(day), 'DD MMMM, dd', {
      locale: ruLocale,
    });
  }
  return undefined;
}

export default class DatePicker extends Component {
  state = {
    from: null,
    to: null,
    isOpenTo: false,
    isOpenFrom: false,
  };

  onClickOutside = () => {
    this.setState({
      isOpenTo: false,
      isOpenFrom: false,
    });
  };

  setDayTo = (day) => {
    this.setState({
      to: day,
      isOpenTo: false,
    });
  };

  setDayFrom = (day) => {
    this.setState({
      from: day,
      isOpenFrom: false,
    });
  };

  showDateFrom = () => {
    this.setState({
      isOpenTo: false,
      isOpenFrom: true,
    });
  };

  showDateTo = () => {
    this.setState({
      isOpenTo: true,
      isOpenFrom: false,
    });
  };

  renderDay = (day) => {
    const date = day.getDate();

    return (
      <div>
        <Day>{date}</Day>
        {prices[date] && prices[date].map(price => <Price key>{price}</Price>)}
      </div>
    );
  };

  render() {
    const { from, to } = this.state;

    const modifiers = { start: from, end: to };

    return (
      <DateFields>
        <DateSelect onClick={this.showDateFrom}>
          <Departures>
            <Input
              date
              type="text"
              name="ddto"
              placeholder="Туда"
              value={from ? dateFormat(from) : ''}
              readOnly
            />
            <ButtonAction>
              <Img alt="Календарь" src={calendar} />
            </ButtonAction>
          </Departures>
        </DateSelect>
        <DateSelect onClick={this.showDateTo}>
          <Arrival>
            <Input
              date
              type="text"
              name="ddfrom"
              placeholder="Обратно"
              value={to ? dateFormat(to) : ''}
              readOnly
            />
            <ButtonAction>
              <Img alt="Календарь" src={calendar} />
            </ButtonAction>
          </Arrival>
        </DateSelect>
        {this.state.isOpenFrom && (
          <PickerWithOutside onClickOutside={this.onClickOutside}>
            <DayPicker
              disabledDays={{ after: to }}
              selectedDays={[to, from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.setDayFrom}
              locale="ru"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              labels={LABELS}
              renderDay={this.renderDay}
            />
            <CheckOneDirection>
              <Checkbox label="Показать цены в одну сторону" />
            </CheckOneDirection>
          </PickerWithOutside>
        )}
        {this.state.isOpenTo && (
          <PickerWithOutside onClickOutside={this.onClickOutside}>
            <DayPicker
              disabledDays={{ before: from }}
              selectedDays={[from, to, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.setDayTo}
              locale="ru"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              labels={LABELS}
              renderDay={this.renderDay}
            />
            <CheckOneDirection>
              <Checkbox label="Показать цены в одну сторону" />
            </CheckOneDirection>
          </PickerWithOutside>
        )}
      </DateFields>
    );
  }
}
