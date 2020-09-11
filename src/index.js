import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
// import store from "./redux/store";

// import TodoApp from "./TodoApp";
import { Map } from './Map';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  document.getElementById('root')
);

