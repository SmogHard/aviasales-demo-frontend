import React, { Component } from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import DayPicker from "react-day-picker";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import "react-day-picker/lib/style.css";
import "./datepicker.css";

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
    flex-basis: 30%;
  }
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

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const LABELS = {
  nextMonth: "следующий месяц",
  previousMonth: "предыдущий месяц"
};

const prices = {
  25: ["43 606"],
  26: ["43 606"],
  27: ["42 606"],
  28: ["41 387"]
};

function dateFormat(day) {
  return format(new Date(day), "DD MMM YYYY, dd", {
    locale: ruLocale
  });
}

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: dateFormat(new Date()),
      to: dateFormat(new Date()),
      isDateTo: false,
      isDateFrom: false
    };
    this.setDateTo = this.setDateTo.bind(this);
    this.setDateFrom = this.setDateFrom.bind(this);
  }

  showDateTo = () => {
    this.setState({ isDateTo: !this.state.isDateTo });
  };

  showDateFrom = () => {
    this.setState({ isDateFrom: !this.state.isDateTo });
  };

  setDateTo(day, { selected }) {
    this.setState({
      to: selected ? undefined : dateFormat(day),
      isDateTo: false,
      isDateFrom: false
    });
  }

  setDateFrom(day, { selected }) {
    this.setState({
      from: selected ? undefined : dateFormat(day),
      isDateTo: false,
      isDateFrom: false
    });
  }

  renderDay(day) {
    const date = day.getDate();
    const dateStyle = {
      fontSize: 18,
      fontWeight: 700,
      width: 40,
      height: 20
    };
    const priceStyle = {
      fontSize: "10px",
      textAlign: "center",
      color: "#00C455"
    };
    const cellStyle = {};
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {prices[date] &&
          prices[date].map((price, i) => (
            <div key={i} style={priceStyle}>
              {price}
            </div>
          ))}
      </div>
    );
  }
  render() {
    return (
      <DateFields>
        <DateSelect onClick={this.showDateTo}>
          <Departures>
            <Input
              date
              type="text"
              name="ddto"
              placeholder="Туда"
              value={this.state.to}
              readOnly
            />
            <ButtonAction>
              <Img alt="Календарь" src={calendar} />
            </ButtonAction>
          </Departures>
        </DateSelect>
        <DateSelect onClick={this.showDateFrom}>
          <Arrival>
            <Input
              date
              type="text"
              name="ddfrom"
              placeholder="Обратно"
              value={this.state.from}
              readOnly
            />
            <ButtonAction>
              <Img alt="Календарь" src={calendar} />
            </ButtonAction>
          </Arrival>
        </DateSelect>
        {this.state.isDateTo && (
          <DayPicker
            selectedDays={this.state.selectedDay}
            onDayClick={this.setDateTo}
            locale={"ru"}
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={1}
            labels={LABELS}
            renderDay={this.renderDay}
          />
        )}
        {this.state.isDateFrom && (
          <DayPicker
            selectedDays={this.state.selectedDay}
            onDayClick={this.setDateFrom}
            locale={"ru"}
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={1}
            labels={LABELS}
            renderDay={this.renderDay}
          />
        )}
      </DateFields>
    );
  }
}
