import styled, { ThemeProvider } from "styled-components";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GlobalStyles, ThemeDefault } from "utils";
import { Login, Register } from "routes";

const StyledWrapper = styled.div`
  height: 100vh;
`;

const App = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: "en" | "pl") => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyles />
      <StyledWrapper>
        {/*<div>*/}
        {/*  <button onClick={() => changeLanguage("en")}>en</button>*/}
        {/*  <button onClick={() => changeLanguage("pl")}>pl</button>*/}
        {/*</div>*/}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="/" element={<PrivateRoute children={<Notes />} />} />*/}
          </Routes>
        </HashRouter>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default App;
