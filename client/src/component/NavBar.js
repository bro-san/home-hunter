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
         <Menu.Menu position='left'>
               <Menu.Item>
                  <NavLink exact to='/'>   
                     <Button >Home</Button>
                  </NavLink>
               </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position='right'>
          <Menu.Item class='navbar'>
               <NavLink exact to='/signup'>
                  <Button primary>Sign up</Button>
               </NavLink>
            </Menu.Item>
            <Menu.Item class='navbar'>
            {user == null ? <Button>
            <NavLink exact to='/login'>   
               Log-in
            </NavLink> 
            </Button> :
            <Button onClick={()=> onLogout()}>
               Logout
            </Button>}
         </Menu.Item>
      </Menu.Menu>
      </Menu>
</Header>

    )
}

export default NavBar;