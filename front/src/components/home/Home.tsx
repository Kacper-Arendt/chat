import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <p>
        <Link to="/login">login</Link>
      </p>
      <p>
        <Link to="/register">register</Link>
      </p>
    </>
  );
};
