import React from "react";
import RequestCard from "./RequestCard";
import { Container } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';


function RealtorPage({requests}){
   
    const requestList = requests.map(request => {
        return <RequestCard request={request} key={request.id} />
    })

    return (
        <Container textAlign="center"> 
            <h1>Realtor</h1>
            {requestList}
        </Container>
        
    )
}
export default RealtorPage;