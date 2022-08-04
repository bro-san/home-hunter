import React from "react";
import { Container, } from 'semantic-ui-react';
import ResponseCard from "./ResponseCard";
import HomeBuyerForm from "./HomeBuyerForm";
// import { Form, Label, Button, Input, Card  } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';




  


function HomeBuyerPage(responses){
    const responseList = responses.responses.map(response => {
        return <ResponseCard key={response.id} realtor_id={response.realtor_id} home_buyer_id={response.home_buyer_id} locationNeed={response.location} description={response.description} wish1={response.wish1} wish2={response.wish2} wish3={response.wish3}/>
    })

return (    
    <>
        <h1>Homebuyer</h1>
        <HomeBuyerForm />
        <Container textAlign="center">
            {responseList}
        </Container>
    </>
    )
}
export default HomeBuyerPage;