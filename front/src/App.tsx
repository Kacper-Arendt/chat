import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GlobalStyles, ThemeDefault } from "utils";
import { Login, Register, Home } from "routes";

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
        <div>
          <button onClick={() => changeLanguage("en")}>en</button>
          <button onClick={() => changeLanguage("pl")}>pl</button>
        </div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            {/*<Route path="/" element={<PrivateRoute children={<Notes />} />} />*/}
          </Routes>
        </Router>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default App;
