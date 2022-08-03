import React from "react";
import { Container, Form, Label, Button, Input } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';

const options = [
    { key: 'y', text: 'Yes', value: 'yes' },
    { key: 'n', text: 'No', value: 'no' },
  ]

function HomeBuyerPage(){
   
    return (
        <>
            <h1>Homebuyer</h1>
            <Container textAlign="center">
                <Form>
                <Form.Field> 
                    <Label> Location Prefence? <br></br> <br></br>
                        <Form.Select options={options} placeholder='Willing to Relocate?'/>
                    </Label>
                </Form.Field>
                <Form.Field>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Desired Square Footer: <br></br> <br></br>
                        <Input placeholder='0' />
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Desire #1: <br></br> <br></br>
                        <Input placeholder="What's your wish?" />
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Desire #2: <br></br> <br></br>
                        <Input placeholder="What's your wish?" />
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Desire #3: <br></br> <br></br>
                        <Input placeholder="What's your wish?" />
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Additional Comments? <br></br> <br></br>
                        <Input placeholder="Anything else?" />
                    </Label>
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </>
    )
}
export default HomeBuyerPage;