import russiaAir from './russia-air.png';
import nordWg from './nord-wg.png';
import nordAir from './nord-air.png';
import redWings from './red-wings.png';
import fly from './fly.png';
import russiaAirSqr from './russia-air-sqr.png';
import redWingsSqr from './red-wings-sqr.png';
import blueAirSqr from './blue-air-sqr.png';

export const data = [
  {
    id: 1,
    info: {
      price: 7712,
      baggage: {
        suitcase: 15,
        handbag: 10,
      },
      proposal: 'Clickavia',
      type: 'lowcost',
    },
    flight: {
      airline: [russiaAir],
      to: {
        timeOfFlight: 240,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519754902000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
    },
  },
  {
    id: 2,
    info: {
      price: 9269,
      baggage: {
        suitcase: 15,
        handbag: 10,
      },
      proposal: 'Biletix',
      type: 'faster',
    },
    flight: {
      airline: [fly],
      type: 'Charter',
      to: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 275,
        transfer: 'CDG',
        dateFrom: 1519754902000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
    },
  },
  {
    id: 3,
    info: {
      price: 8029,
      baggage: {
        handbag: 10,
        suitcase: 10,
        price: 127,
      },
      baggageWithoutSuite: {
        handbag: 10,
      },
      proposal: 'Билетик Аэро',
      type: 'best',
    },
    flight: {
      airline: [nordWg],
      to: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519754902000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
    },
  },
  {
    id: 4,
    info: {
      price: 8164,
      baggage: {
        suitcase: 15,
        handbag: 10,
      },
      ticketsLeft: 4,
      proposal: 'Clickavia',
      more: [
        {
          id: 1,
          company: 'Aviabilet',
          price: 8432,
        },
        {
          id: 2,
          company: 'Poleteli',
          price: 8339,
        },
        {
          id: 3,
          company: 'Clickavia',
          price: 8738,
        },
      ],
    },
    flight: {
      airline: [nordAir],
      to: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519754902000,
        cityFrom: 'Barselona',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Moscow',
        airportTo: 'MOW',
      },
    },
  },
  {
    id: 5,
    info: {
      price: 8240,
      baggage: {
        suitcase: 15,
        handbag: 10,
      },
      proposal: 'Aviakassa',
    },
    flight: {
      airline: [redWings],
      type: 'Чартер',
      to: {
        timeOfFlight: 275,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 280,
        transfer: '',
        dateFrom: 1519754902000,
        cityFrom: 'Barselona',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Moscow',
        airportTo: 'MOW',
      },
    },
  },
  {
    id: 6,
    info: {
      price: 9108,
      baggage: {
        suitcase: 15,
        handbag: 10,
      },
      proposal: 'Clickavia',
    },
    flight: {
      airline: [redWingsSqr, russiaAirSqr],
      to: {
        timeOfFlight: 265,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 255,
        transfer: '',
        dateFrom: 1519754902000,
        cityFrom: 'Barselona',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Moscow',
        airportTo: 'MOW',
      },
    },
  },
  {
    id: 7,
    info: {
      price: 9485,
      baggage: {
        suitcase: 15,
        handbag: 10,
      },
      proposal: 'Clickavia',
    },
    flight: {
      airline: [russiaAirSqr, blueAirSqr],
      to: {
        timeOfFlight: 277,
        transfer: '',
        dateFrom: 1519430700000,
        cityFrom: 'Moscow',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Barselona',
        airportTo: 'PJ',
      },
      from: {
        timeOfFlight: 340,
        transfer: '',
        dateFrom: 1519754902000,
        cityFrom: 'Barselona',
        airportFrom: 'LND',
        dateTo: 1519754902000,
        cityTo: 'Moscow',
        airportTo: 'MOW',
      },
    },
  },
];

export const localization = {
  city: {
    Barselona: 'Барселона',
    Moscow: 'Москва',
    Pekin: 'Пекин',
    Berlin: 'Берлин',
  },
  country: {
    Russia: 'Россия',
    Germany: 'Германия',
    China: 'Китай',
    Spain: 'Испания',
  },
  common: {
    Charter: 'Чартер',
  },
};
