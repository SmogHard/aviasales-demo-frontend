import russia_air from "./russia-air.png";
import nord_wg from "./nord-wg.png";
import nord_air from "./nord-air.png";
import red_wings from "./red-wings.png";
import fly from "./fly.png";
import russia_air_sqr from "./russia-air-sqr.png";
import red_wings_sqr from "./red-wings-sqr.png";
import blue_air_sqr from "./blue-air-sqr.png";
import baggage_none from "./baggage-none.svg";

export const data = [
  {
    info: {
      price: 7712,
      baggage: baggage_none,
      proposal: "Clickavia",
      type: "lowcost"
    },
    flight: {
      airline: russia_air,
      to: {
        takeoff: "00:05",
        landing: "03:05",
        total: "5 ч",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:35",
        landing: "17:10",
        total: "4 ч 35 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9269,
      baggage: baggage_none,
      proposal: "Biletix",
      type: "faster"
    },
    flight: {
      airline: fly,
      type: "Чартер",
      to: {
        takeoff: "07:30",
        landing: "09:50",
        total: "4 ч 20 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "11:20",
        landing: "17:35",
        total: "4 ч 15 м",
        transfers: "CDG",
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8029,
      baggage: baggage_none,
      proposal: "Билетик Аэро",
      type: "best"
    },
    flight: {
      airline: nord_wg,
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: "4 ч 55 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: "4 ч 30 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8164,
      baggage: baggage_none,
      proposal: "Clickavia"
    },
    flight: {
      airline: nord_air,
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: "4 ч 55 м",
        transfers: 0,
        dateFrom: "24 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "24 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: "4 ч 30 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8240,
      baggage: baggage_none,
      proposal: "Aviakassa"
    },
    flight: {
      airline: red_wings,
      type: "Чартер",
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: "4 ч 55 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: "4 ч 30 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9108,
      baggage: baggage_none,
      proposal: "Clickavia"
    },
    flight: {
      airline: [red_wings_sqr, russia_air_sqr],
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: "4 ч 55 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: "4 ч 30 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9485,
      baggage: baggage_none,
      proposal: "Clickavia"
    },
    flight: {
      airline: [russia_air_sqr, blue_air_sqr],
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: "4 ч 55 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: "4 ч 30 м",
        transfers: 0,
        dateFrom: "26 апр 2018, Сб",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "26 апр 2018, Сб",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  }
];
