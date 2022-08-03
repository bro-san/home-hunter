import React from "react";
import { Container, Form, Label, Button, Input } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';

function HomeBuyerPage(){
   
    return (
        <>
            <h1>Homebuyer</h1>
            <Container textAlign="center">
                <Form>
                <Form.Field>
                    <Label for="buyerform">Animal Name: <br></br> <br></br>
                        <Input placeholder='Animal Name' />
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Scientific Name: <br></br> <br></br>
                        <Input placeholder='Scientific Name' />
                    </Label>
                </Form.Field>
                <Form.Field>
                    <Label for="buyerform">Image:  <br></br> <br></br>
                        <Input placeholder='Image URL' />
                    </Label>
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </>
    )
}
export default HomeBuyerPage;