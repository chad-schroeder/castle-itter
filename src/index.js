import React from "react";
import ReactDOM from "react-dom";

import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from 'styled-components';

import { App } from './App';

import { Provider as SpectrumProvider, defaultTheme } from '@adobe/react-spectrum';

import GlobalStyle from 'Utils/Styles/GlobalStyle';
import theme from 'Utils/Styles/theme';

import store from './store';

ReactDOM.render(
  <SpectrumProvider theme={defaultTheme}>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle /> 
      </ThemeProvider>
    </ReduxProvider>
  </SpectrumProvider>,
  document.getElementById('root'),
);

