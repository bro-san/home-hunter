import React from "react";
import { Form, Label, Button, Input } from 'semantic-ui-react';

// import {  Container, Card } from 'semantic-ui-react';
// import { useState, useEffect } from 'react';

const options = [
    { key: 'y', text: 'Yes', value: 'yes' },
    { key: 'n', text: 'No', value: 'no' },
  ]

function HomeBuyerForm(){
   
    return (
        <Form position='right' textAlign="center">
            <Form.Field> 
                <Label> Location Prefence? <br></br><br></br>
                    <Form.Select options={options} placeholder='Willing to Relocate?'/>
                </Label>
            </Form.Field>
            <Form.Field>
                <Label for="buyerform">Desired Square Footer: <br></br> <br></br>
                    <Input placeholder='0' />
                </Label>
            </Form.Field>
            <Form.Field>
                <Label for="buyerform">Wish #1: <br></br> <br></br>
                    <Input placeholder="What's your first wish?" />
                </Label>
            </Form.Field>
            <Form.Field>
                <Label for="buyerform">Wish #2: <br></br> <br></br>
                    <Input placeholder="What's your second wish?" />
                </Label>
            </Form.Field>
            <Form.Field>
                <Label for="buyerform">Wish #3: <br></br> <br></br>
                    <Input placeholder="What's your third wish?" />
                </Label>
            </Form.Field>
            <Form.Field>
                <Label for="buyerform">Additional Comments? <br></br> <br></br>
                    <Input placeholder="Anything else?" />
                </Label>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
export default HomeBuyerForm;