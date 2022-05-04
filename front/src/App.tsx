import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "pl") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("pl")}>pl</button>
      <>{t("hello")}</>
    </div>
  );
};

export default App;
