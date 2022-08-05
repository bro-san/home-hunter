import React, {useState} from "react";
import { Container, Form, Label, Button, Input } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';

const options = [
    { key: 'y', text: 'Yes', value: true },
    { key: 'n', text: 'No', value: false },
  ]

function HomeBuyerPage(){
    const [homeBuyer, setHomeBuyer] = useState("");
    // const [locationSpecific, setLocationSpecific] = useState(null);
    const [locationSize, setLocationSize] = useState(0);
    const [comment, setComment] = useState("");
    const [wish1, setWish1] = useState("");
    const [wish2, setWish2] = useState("");
    const [wish3, setWish3] = useState("");;
    const [image, setImage] = useState("")

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
            <h1>Homebuyer</h1>
            <Container textAlign="center">
                <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Label for="buyerform">Home Buyer ID: <br></br> <br></br>
                        <Input placeholder='0' onChange={(e) => setHomeBuyer(e.target.value)}/>
                    </Label>
                </Form.Field>
                {/* <Form.Field> 
                    <Label> Location Prefence? <br></br> <br></br>
                        <Form.Select options={options} placeholder='Willing to Relocate?' onChange={(e) => console.log(e.target)}/>
                    </Label>
                </Form.Field> */}
                <Form.Field>
                    <Label for="buyerform">Desired Square Footer: <br></br> <br></br>
                        <Input placeholder='0' onChange={(e) => setLocationSize(e.target.value)}/>
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Wish #1: <br></br> <br></br>
                        <Input placeholder="What's your first wish?" onChange={(e) => setWish1(e.target.value)}/>
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Wish #2: <br></br> <br></br>
                        <Input placeholder="What's your second wish?" onChange={(e) => setWish2(e.target.value)}/>
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Wish #3: <br></br> <br></br>
                        <Input placeholder="What's your third wish?" onChange={(e) => setWish3(e.target.value)}/>
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Inspirational Image: <br></br> <br></br>
                        <Input placeholder="enter image url" onChange={(e) => setComment(e.target.value)}/>
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Additional Comments? <br></br> <br></br>
                        <Input placeholder="Anything else?" onChange={(e) => setComment(e.target.value)}/>
                    </Label>
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </>
    )
}
export default HomeBuyerPage;