import russia_air from "./russia-air.png";
import nord_wg from "./nord-wg.png";
import nord_air from "./nord-air.png";
import red_wings from "./red-wings.png";
import fly from "./fly.png";
import russia_air_sqr from "./russia-air-sqr.png";
import red_wings_sqr from "./red-wings-sqr.png";
import blue_air_sqr from "./blue-air-sqr.png";

export const data = [
  {
    info: {
      price: 7712,
      baggage: [
        {
          suitcase: "15",
          handbag: "10"
        }
      ],
      proposal: "Clickavia",
      type: "lowcost"
    },
    flight: {
      airline: [russia_air],
      to: {
        takeoff: "00:05",
        landing: "03:05",
        total: {
          hour: 4
        },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:35",
        landing: "17:10",
        total: { hour: 4, minutes: 35 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9269,
      baggage: [
        {
          handbag: "10"
        }
      ],
      proposal: "Biletix",
      type: "faster"
    },
    flight: {
      airline: [fly],
      type: "Чартер",
      to: {
        takeoff: "07:30",
        landing: "09:50",
        total: { hour: 4, minutes: 20 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "11:20",
        landing: "17:35",
        total: { hour: 4, minutes: 15 },
        transfers: "CDG",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8029,
      baggage: [
        {
          handbag: "10"
        },
        {
          handbag: "10",
          suitcase: "10",
          price: "127"
        }
      ],
      proposal: "Билетик Аэро",
      type: "best"
    },
    flight: {
      airline: [nord_wg],
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: { hour: 4, minutes: 55 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: { hour: 4, minutes: 30 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8164,
      baggage: [
        {
          suitcase: "15",
          handbag: "10",
          left: "Осталось 4 билета"
        }
      ],
      proposal: "Clickavia",
      type: "common",
      more: [
        {
          company: "Aviabilet",
          price: "8 432"
        },
        {
          company: "Poleteli",
          price: "8 339"
        },
        {
          company: "Clickavia",
          price: "8 738"
        }
      ]
    },
    flight: {
      airline: [nord_air],
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: { hour: 4, minutes: 55 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: { hour: 4, minutes: 30 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8240,
      baggage: [
        {
          suitcase: "15",
          handbag: "10"
        }
      ],
      proposal: "Aviakassa",
      type: "common"
    },
    flight: {
      airline: [red_wings],
      type: "Чартер",
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: { hour: 4, minutes: 55 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: { hour: 4, minutes: 55 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9108,
      baggage: [
        {
          suitcase: "15",
          handbag: "10"
        }
      ],
      proposal: "Clickavia",
      type: "common"
    },
    flight: {
      airline: [red_wings_sqr, russia_air_sqr],
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: { hour: 4, minutes: 55 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: { hour: 4, minutes: 30 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9485,
      baggage: [
        {
          suitcase: "15",
          handbag: "10"
        }
      ],
      proposal: "Clickavia",
      type: "common"
    },
    flight: {
      airline: [russia_air_sqr, blue_air_sqr],
      to: {
        takeoff: "00:15",
        landing: "03:10",
        total: { hour: 4, minutes: 55 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Москва",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Барселона",
        airportTo: "PJ"
      },
      from: {
        takeoff: "10:45",
        landing: "17:15",
        total: { hour: 4, minutes: 30 },
        transfers: "Прямой",
        dateFrom: "2018-04-12",
        cityFrom: "Барселона",
        airportFrom: "LND",
        dateTo: "2018-04-12",
        cityTo: "Москва",
        airportTo: "PJ"
      }
    }
  }
];
