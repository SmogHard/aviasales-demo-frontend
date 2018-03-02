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
          suitcase: 15,
          handbag: 10
        }
      ],
      proposal: "Clickavia",
      type: "lowcost"
    },
    flight: {
      airline: [russia_air],
      to: {
        timeOfFlight: 240,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519754902000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 9269,
      baggage: [
        {
          handbag: 10
        }
      ],
      proposal: "Biletix",
      type: "faster"
    },
    flight: {
      airline: [fly],
      type: "Charter",
      to: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 275,
        transfer: "CDG",
        dateFrom: 1519754902000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8029,
      baggage: [
        {
          handbag: 10
        },
        {
          handbag: 10,
          suitcase: 10,
          price: 127
        }
      ],
      proposal: "Билетик Аэро",
      type: "best"
    },
    flight: {
      airline: [nord_wg],
      to: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519754902000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      }
    }
  },
  {
    info: {
      price: 8164,
      baggage: [
        {
          suitcase: 15,
          handbag: 10,
          left: 4
        }
      ],
      proposal: "Clickavia",
      type: "common",
      more: [
        {
          company: "Aviabilet",
          price: 8432
        },
        {
          company: "Poleteli",
          price: 8339
        },
        {
          company: "Clickavia",
          price: 8738
        }
      ]
    },
    flight: {
      airline: [nord_air],
      to: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519754902000,
        cityFrom: "Barselona",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Moscow",
        airportTo: "MOW"
      }
    }
  },
  {
    info: {
      price: 8240,
      baggage: [
        {
          suitcase: 15,
          handbag: 10
        }
      ],
      proposal: "Aviakassa",
      type: "common"
    },
    flight: {
      airline: [red_wings],
      type: "Чартер",
      to: {
        timeOfFlight: 275,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 280,
        transfer: "",
        dateFrom: 1519754902000,
        cityFrom: "Barselona",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Moscow",
        airportTo: "MOW"
      }
    }
  },
  {
    info: {
      price: 9108,
      baggage: [
        {
          suitcase: 15,
          handbag: 10
        }
      ],
      proposal: "Clickavia",
      type: "common"
    },
    flight: {
      airline: [red_wings_sqr, russia_air_sqr],
      to: {
        timeOfFlight: 265,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 255,
        transfer: "",
        dateFrom: 1519754902000,
        cityFrom: "Barselona",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Moscow",
        airportTo: "MOW"
      }
    }
  },
  {
    info: {
      price: 9485,
      baggage: [
        {
          suitcase: 15,
          handbag: 10
        }
      ],
      proposal: "Clickavia",
      type: "common"
    },
    flight: {
      airline: [russia_air_sqr, blue_air_sqr],
      to: {
        timeOfFlight: 277,
        transfer: "",
        dateFrom: 1519430700000,
        cityFrom: "Moscow",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Barselona",
        airportTo: "PJ"
      },
      from: {
        timeOfFlight: 340,
        transfer: "",
        dateFrom: 1519754902000,
        cityFrom: "Barselona",
        airportFrom: "LND",
        dateTo: 1519754902000,
        cityTo: "Moscow",
        airportTo: "MOW"
      }
    }
  }
];
