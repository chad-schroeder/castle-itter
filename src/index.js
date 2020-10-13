import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';

import { App } from './App';

import GlobalStyle from 'Utils/Styles/GlobalStyle';
import theme from 'Utils/Styles/theme';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle /> 
      </ThemeProvider>
    </Provider>,
  document.getElementById('root'),
);

