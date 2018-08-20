/* global document */
import 'flexboxgrid2/flexboxgrid2.css';
import ru from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import messages from './messages';

addLocaleData(ru);

ReactDOM.render(
  <IntlProvider locale="ru" messages={messages}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
