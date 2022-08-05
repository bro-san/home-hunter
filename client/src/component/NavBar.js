import React, { useEffect } from "react";
import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function NavBar({user, setUser}){
const history = useHistory();
  

   function onLogout(e){
      e.preventDefault()
      fetch('/logout', {
         method: 'DELETE',
      })
      .then(response => {
         if(response.ok){
           setUser(false)
           response.json().then(() => {
             history.push("/signup")
         }
       )}})
   }
 
   console.log(user)
    return (

        <Header>
            <Menu textAlign="center">
                  <Button class='ui button'>
                     <NavLink exact to='/'>   
                     Home
                     </NavLink>
                  </Button>

               <Menu.Item class='navbar'>
                  <Button primary>
                     <NavLink exact to='/signup'>
                     Sign up
                     </NavLink>
                  </Button>
               </Menu.Item>

               <Menu.Item class='navbar'>
                  {user==null || user == false ? <Button>
                  <NavLink exact to='/login'>   
                     Log-in
                  </NavLink> 
                  </Button> :
                  <Button onClick={(e)=> onLogout(e)}>
                     Logout
                  </Button>}
                  
               </Menu.Item>

            </Menu>
               
      </Header>

    )
}

export default NavBar;