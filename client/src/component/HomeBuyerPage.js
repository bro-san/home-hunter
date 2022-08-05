import React, {useState} from "react";
import ResponseCard from "./ResponseCard";
import { Container, Form, Label, Button, Input, TextArea } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';

const options = [
    { key: 'y', text: 'Yes', value: 'yes' },
    { key: 'n', text: 'No', value: 'no' },
  ]

function HomeBuyerPage(responses){
    const [homeBuyer, setHomeBuyer] = useState("");
    // const [locationSpecific, setLocationSpecific] = useState("");
    const [locationSize, setLocationSize] = useState("");
    const [comment, setComment] = useState("");
    const [wish1, setWish1] = useState("");
    const [wish2, setWish2] = useState("");
    const [wish3, setWish3] = useState("");;
    const [image, setImage] = useState("")

    const responseList = responses.responses.map(response => {
        return <ResponseCard key={response.id} realtor_id={response.realtor_id} home_buyer_id={response.home_buyer_id} locationNeed={response.location} description={response.description} wish1={response.wish1} wish2={response.wish2} wish3={response.wish3}/>
    })


    function handleSubmit(e) {
       e.preventDefault();
       fetch("http://localhost:3000/requests", {
          method: "POST",
        //   mode: 'no-cors',
          headers: {
             "Content-Type": "application/json",
          },
          body: JSON.stringify({
             home_buyer_id: parseInt(homeBuyer),
            //  location_specific: locationSpecific, 
            location_size: parseInt(locationSize),
             comment: comment,
             wish1: wish1,
             wish2: wish2,
             wish3: wish3,
             image: image,
          }),
       })
          .then((r) => r.json())
          .then(() => {
             setHomeBuyer("")
            //  setLocationSpecific("")
             setLocationSize("")
             setComment("")
             setWish1("")
             setWish2("")
             setWish3("")
             setImage("")
          })
          .then(console.log("it posted!"))
    }

    console.log("homebuyer:", homeBuyer, "locationSize:", locationSize, "Comment:", comment, "wish1:", wish1, "wish2:", wish2, "wish3:", wish3, "Image:", image)

    return (
        <>
            
            <Container textAlign="center">
                <h1>HomeGenie</h1>
                <Form onSubmit={handleSubmit}>
                {/* <Form.Field> 
                    <Label> Location Prefence? <br></br> <br></br>
                        <Form.Select options={options} placeholder='Willing to Relocate?' onChange={(e) => setLocationSpecific(e.target.value)}/>
                    </Label>
                </Form.Field> */}
                <Form.Field>
                    <Label for="buyerform">Home Buyer ID: </Label>
                        <Input placeholder='0' onChange={(e) => setHomeBuyer(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Desired Square Footer: </Label>
                        <Input placeholder='0' onChange={(e) => setLocationSize(e.target.value)}/>
                    
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Wish #1: </Label>
                        <Input placeholder="What's your first wish?" onChange={(e) => setWish1(e.target.value)}/>
                    
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Wish #2:  </Label>
                        <Input placeholder="What's your second wish?" onChange={(e) => setWish2(e.target.value)}/>
                   
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Wish #3: </Label>
                        <Input placeholder="What's your third wish?" onChange={(e) => setWish3(e.target.value)}/>
                    
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Additional Comments? </Label>
                        <Input placeholder="Anything else?" onChange={(e) => setComment(e.target.value)}/>
                    
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <Container textAlign="center">
            {responseList}
        </Container>
        </>
    )
}
export default HomeBuyerPage;