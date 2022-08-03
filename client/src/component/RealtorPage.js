import React from "react";
import RequestCard from "./RequestCard";
import { Container } from 'semantic-ui-react';
// import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';


function RealtorPage(){
   
    return (
        <Container textAlign="center"> 
            <h1>Realtor</h1>
            <RequestCard />
        </Container>
        
    )
}
export default RealtorPage;