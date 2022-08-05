import React from "react";
import RequestCard from "./RequestCard";
import { Container } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function RealtorPage({user}){
   
    const [requests, setRequests] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/requests')
            .then(resp => resp.json())
            .then(data => setRequests(data))
    }, [user])

    const requestList = requests.map(request => {
        return <RequestCard key={request.id}
        id={request.id}
        buyer_id={request.home_buyer_id} 
        locationNeed={request.location_specific}
        locationSize={request.location_size} 
        comment={request.comment} wish1={request.wish1} 
        wish2={request.wish2} wish3={request.wish3} 
        image={request.image}
        buyerName={request.home_buyer.name}
        handleDelete={handleDelete}/>
    })

    function handleDelete(id) {
        const deleteCard = requests.filter(request => request.id !== id)
        setRequests(deleteCard)
        console.log("Deleted!")
      }
    return (
        <Container textAlign="center"> 
            <h1>Realtor</h1>
            {requestList}
        </Container>
        
    )
}
export default RealtorPage;