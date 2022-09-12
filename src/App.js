import { Fragment } from "react";
import Counter from "./components/Counter";
import Headers from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {auth && <Headers></Headers>}
      {!auth && <Auth></Auth>}
      {auth && <UserProfile></UserProfile>}
      {auth && <Counter />}
    </Fragment>
  );
}

export default App;
