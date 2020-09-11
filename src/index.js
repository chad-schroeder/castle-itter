import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { Map } from './Map';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  document.getElementById('root')
);

