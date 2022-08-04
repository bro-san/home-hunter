import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import NavBar from './component/NavBar'
// import './App.css';
import Home from './component/Home';
import HomeBuyerPage from "./component/HomeBuyerPage";
import RealtorPage from "./component/RealtorPage";



function App() {

  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/requests')
        .then(resp => resp.json())
        .then(data => setRequests(data))
}, [])

const [responses, setResponses] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/responses')
        .then(resp => resp.json())
        .then(data => setResponses(data))
}, [])

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
            <HomeBuyerPage responses={responses}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </>
  );
}

export default App;
