import React from 'react'
import { Container } from 'semantic-ui-react';
import { Card, Form, Label, Button, Input, Checkbox } from 'semantic-ui-react';

const Signup = () => {
  return (
    <Container textAlign="center"> 
        <h1>Signup</h1>
        <Form>

            <Form.Field>
                <label>Name</label>
                <input placeholder='First Name' />
            </Form.Field>

            <Form.Field>
                <label>Company</label>
                <input placeholder='Company' />
            </Form.Field>

            <Form.Field>
                <label>Where does your firm operate?</label>
                <input placeholder='City or State' />
            </Form.Field>

            <Form.Field>
                <label>Preferred Username</label>
                <input placeholder='McBethRealty22' />
            </Form.Field>

            <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='john@sunriserealty.com'
            // error={{
            //     content: 'Please enter a valid email address',
            //     pointing: 'below',
            // }}
            />

            <Form.Field>
                <label>Password</label>
                <input placeholder='password123' />
            </Form.Field>
            

            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>

            <Button type='submit'>Submit</Button>
        </Form>
            
    </Container>
        
  )
}

export default Signup;