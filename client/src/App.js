import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
// import './App.css';
import Home from './component/Home';
import HomeBuyerPage from "./component/HomeBuyerPage";
import RealtorPage from "./component/RealtorPage";
import Signup from "./component/Signup";
import Login from "./component/Login";
import RequestDetail from "./component/RequestDetail";


function App() {
  const [user, setUser] = useState(false);

const [responses, setResponses] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/responses')
        .then(resp => resp.json())
        .then(data => setResponses(data))
}, [])

  return (
    <>
      <Header>
        <NavBar user = {user} setUser = {setUser}/>
      </Header>
      <Switch>
          <Route exact path="/realtors">
            <RealtorPage user={user}/> 
          </Route>
          
          <Route exact path="/homebuyer">
            <HomeBuyerPage responses={responses}/>
          </Route>
          
          <Route  path="/signup">
            <Signup />
          </Route>
          
          <Route exact path="/login">
            <Login setUser = {setUser}/>
          </Route>

          <Route path="/:id/RequestDetail">
            <RequestDetail/>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </>
  );
}

export default App;
