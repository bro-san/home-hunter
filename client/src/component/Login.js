import React from 'react'
import { Container } from 'semantic-ui-react';
import { Card, Form, Label, Button, Input } from 'semantic-ui-react';

const Login = () => {
  return (
    <Container textAlign="center"> 
        <h1>Login</h1>
        <Form>





        <Form.Field>
            <label>Username</label>
            <input  />
        </Form.Field>


        <Form.Field>
            <label>Password</label>
            <input  />
        </Form.Field>


        <Button type='submit'>Login</Button>
        </Form>
        
    </Container>
  )
}

export default Login;