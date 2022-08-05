import React, {useState} from "react";
import ResponseCard from "./ResponseCard";
import { Card, Container, Form, Label, Button, Input } from 'semantic-ui-react';

function HomeBuyerPage({responses}){
    const responseList = responses.map(response => {
        return <ResponseCard key={response.id} realtorName={response.realtor.name} homeBuyerName={response.home_buyer.name} location={response.location} description={response.description}/>
    })
    
    const options = [
    { key: 'y', text: 'Yes', value: true },
    { key: 'n', text: 'No', value: false },
    ]
 
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
            
            <Container textAlign="center">
                <h1>Home Buyers</h1>
                <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Home Buyer ID: </label>
                        <Input placeholder='0' onChange={(e) => setHomeBuyer(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field> 
                    <Label> Location Prefence? <br></br> <br></br>
                        <Form.Select options={options} placeholder='Willing to Relocate?' onChange={(e) => console.log(e.target)}/>
                    </Label>
                </Form.Field> */}
                <Form.Field>
                    <label>Desired Square Footage:</label>
                        <Input placeholder='0' onChange={(e) => setLocationSize(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label for="buyerform">Wish #1:</label>
                        <Input placeholder="What's your first wish?" onChange={(e) => setWish1(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label for="buyerform">Wish #2:</label>
                        <Input placeholder="What's your second wish?" onChange={(e) => setWish2(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label for="buyerform">Wish #3:</label>
                        <Input placeholder="What's your third wish?" onChange={(e) => setWish3(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label for="buyerform">Inspirational Image:</label>
                        <Input placeholder="enter image url" onChange={(e) => setImage(e.target.value)}/>
                    
                </Form.Field>

                <Form.Field>
                    <label for="buyerform">Additional Comments?</label>
                        <Input placeholder="Anything else?" onChange={(e) => setComment(e.target.value)}/>
                    
                </Form.Field>

                <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            <br></br> <br></br>
            <Container textAlign="center">
                <Card.Group itemsPerRow={3}>
                    {responseList}
                </Card.Group>
            </Container>
        </>
    )
}
export default HomeBuyerPage;