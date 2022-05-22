import { Link } from "react-router-dom";

// COMPONENTS
import { RouteWrapper } from "hoc/RouteWrapper";
import { Header } from "components/home/views";
import { HeaderIcon } from "components/home/items";

export const Home = () => {
  return (
    <RouteWrapper
      headerIcon={<HeaderIcon />}
      header={<Header />}
      main={
        <p>
          <Link to="/register">reg</Link>
          <Link to="/login">log</Link>
        </p>
      }
    />
  );
};
