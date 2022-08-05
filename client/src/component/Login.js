import React, {useState} from 'react'
import { Container } from 'semantic-ui-react';
import { Card, Form, Label, Button, Input } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const Login = ({setUser}) => {

  const [form, setForm] = useState({
    username: " ",
    password: " "
  })
  const history = useHistory();

  function handleSubmit(e){
      
      
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
            setUser(true)
            response.json().then(() => {
              history.push("/realtors")
          }

        )}})
       
        
        
        
        
        
  }
        
          

      

  

  return (

  


    <Container textAlign="center"> 
        <h1>Login</h1>
        <Form  onSubmit={(e)=> handleSubmit(e)}>

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