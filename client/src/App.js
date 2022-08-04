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



function App() {

  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetch('https://real-genie.herokuapp.com/requests')
        .then(resp => resp.json())
        .then(data => setRequests(data))
}, [])

// console.log(requests)

function handleDelete(id) {
  const deleteCard = requests.filter(request => request.id !== id)
  setRequests(deleteCard)
  console.log("Deleted!")
}
  
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Switch>
          <Route exact path="/realtors">
            <RealtorPage requests={requests} handleDelete={handleDelete}/> 
          </Route>
          <Route exact path="/homebuyer">
            <HomeBuyerPage/>
          </Route>
          <Route  path="/signup">
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
