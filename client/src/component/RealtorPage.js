import React from "react";
import RequestCard from "./RequestCard";
import { Container, Card } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';


function RealtorPage({requests, handleDelete}){
   
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
    
    return (
        <Container textAlign="center"> 
            <h1>Realtors</h1>
            <Card.Group itemsPerRow={3}>
                {requestList}
            </Card.Group>
        </Container>
        
    )
}
export default RealtorPage;