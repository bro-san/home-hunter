import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
// import './App.css';
import Home from './component/Home';
import HomeBuyerPage from "./component/HomeBuyerPage";
import RealtorPage from "./component/RealtorPage";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Switch>
          <Route exact path="/realtors">
            <RealtorPage /> 
          </Route>
          <Route exact path="/homebuyer">
            <HomeBuyerPage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </>
  );
}

export default App;
