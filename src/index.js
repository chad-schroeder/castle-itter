import React from "react";
import ReactDOM from "react-dom";

import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from 'styled-components';

import { Provider as SpectrumProvider, defaultTheme } from '@adobe/react-spectrum';

import GlobalStyle from 'Utils/Styles/GlobalStyle';
import theme from 'Utils/Styles/theme';

import store from 'store';

import { App } from './App';

ReactDOM.render(
  <SpectrumProvider theme={defaultTheme}>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <App />
        <GlobalStyle /> 
      </ReduxProvider>
    </ThemeProvider>
  </SpectrumProvider>,
  document.getElementById('root'),
);

