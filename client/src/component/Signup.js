import React, {useState} from 'react'
import { Container } from 'semantic-ui-react';
import { Card, Form, Label, Button, Input, Checkbox } from 'semantic-ui-react';

const Signup = () => {
    const [form, setFormData] = useState({
        name: "Name",
        company: "",
        location: "",
        username: "",
        email: "",
        password: "Password",
        admin: "false"

    })
    // function handleSubmit(){
        

    //     // let myHeaders = new Headers();
    //     // myHeaders.append("Content-Type", "application/json");
        
    //     // let raw = JSON.stringify({
    //     //     name: form.name,
    //     //     company: form.company,
    //     //     location: form.location,
    //     //     username: form.username,
    //     //     email: form.email,
    //     //     password: form.password,
    //     //     admin: "false"

    //     // });
        
    //     // let requestOptions = {
    //     //   method: 'POST',
    //     // //   mode: 'no-cors',
    //     //   headers: myHeaders,
    //     //   body: raw,
    //     //   redirect: 'follow'
    //     // };
        
    //     // fetch("/realtors", requestOptions)
    //     //   .then(response => response.text())
    //     //   .then(result => console.log(result))
    //     //   .catch(error => console.log('error', error));
       
    // }
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/realtors', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(
            {
                "name": form.name,
                "company": form.company,
                "location": form.location,
                "username": form.username,
                "email": form.email,
                "password": form.password,
                "admin": "false"
            }
          )
        })
        .then(response => response.json())
        .then(json => console.log(json))
      }


  return (
    <Container textAlign="center"> 
        <h1>Signup</h1>
        <Form onSubmit={(e)=> handleSubmit(e)}>

            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => setFormData({...form, name: e.target.value})} value = {form.name}  />
            </Form.Field>

            <Form.Field>
                <label>Company</label>
                <input placeholder='Company' onChange={(e) => setFormData({...form, company: e.target.value})} value = {form.company} />
            </Form.Field>

            <Form.Field>
                <label>Where does your firm operate?</label>
                <input placeholder='City or State' onChange={(e) => setFormData({...form, location: e.target.value})} value = {form.location}/>
            </Form.Field>

            <Form.Field>
                <label>Preferred Username</label>
                <input placeholder='McBethRealty22' onChange={(e) => setFormData({...form, username: e.target.value})} value = {form.username} />
            </Form.Field>

            <Form.Field>
                <label>email</label>
                <input placeholder='john@sunriserealty.com' onChange={(e) => setFormData({...form, email: e.target.value})} value = {form.email} />
            </Form.Field>

            <Form.Field>
                <label>Password</label>
                <input placeholder='password123' onChange={(e) => setFormData({...form, password: e.target.value})} value = {form.password}/>
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