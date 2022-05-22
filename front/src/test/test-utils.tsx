import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNode } from "react";
import { i18n } from "config/i18n";

import { store } from "redux/store";
import { ThemeDefault } from "utils";

export const AppWrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>
    <ThemeProvider theme={ThemeDefault}>
      <>{children}</>
    </ThemeProvider>
  </Provider>
);

export const RouterWrapper = ({ children }: { children: ReactNode }) => {
  i18n.init();

  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <Router>{children}</Router>
      </ThemeProvider>
    </Provider>
  );
};
