import React, {useState} from 'react'
import { Container } from 'semantic-ui-react';
import { Card, Form, Label, Button, Input } from 'semantic-ui-react';

const Login = ({setUser}) => {

  const [form, setForm] = useState({
    username: " ",
    password: " "
  })

  function handleSubmit(){
      
  
      fetch('/login', {
        method: 'POST',
        headers:{'Content-Type': 'application/json',
        Accept: "application/json",
      },
        body: JSON.stringify({
          "username": form.username.trim(),
          "password": form.password.trim()
        })
      })
        .then(response => {
          if(response.ok){
            response.json().then(function(value) {
              window.location = 'http://localhost:4000/realtors';
              console.log(value);
              setUser("newUser")
          }

        )}})
        
        
  }
        
          

      

  

  return (

  


    <Container textAlign="center"> 
        <h1>Login</h1>
        <Form  onSubmit={()=> handleSubmit()}>

        <Form.Field>
            <label>Username</label>
            <input onChange = {(e)=>setForm({...form, username: e.target.value})} value = {form.username } />
        </Form.Field>


        <Form.Field>
            <label>Password</label>
            <input onChange = {(e)=>setForm({...form, password: e.target.value})} value = {form.password } />
        </Form.Field>


        <Button type='submit'>Login</Button>
        </Form>
        
    </Container>
  )
}

export default Login;