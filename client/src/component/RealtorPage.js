import React from "react";
import RequestCard from "./RequestCard";
import { Container } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';


function RealtorPage({requests}){
   console.log(requests)
    const requestList = requests.map(request => {
        return <RequestCard key={request.id} buyer_id={request.home_buyer_id} locationNeed={request.location_size} comment={request.comment} wish1={request.wish1} wish2={request.wish2} wish3={request.wish3}/>
    })

    return (
        <Container textAlign="center"> 
            <h1>Realtor</h1>
            {requestList}
        </Container>
        
    )
}
export default RealtorPage;