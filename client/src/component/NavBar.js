import React, { useEffect } from "react";
import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar({user, setUser}){
  

   function onLogout(e){
      e.preventDefault()
      setUser(false)
      fetch('/logout', {
         method: 'DELETE',
      })
     
      
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
            {/* <Button icon>
               <NavLink exact to='/animals'>
                  <span></span>
                  <Icon name='paw' />
                  <br></br>
                  Animals
               </NavLink>
            </Button> */}
            {/* <Button icon>
               <NavLink exact to='/habitats'>
                  <span></span>
                  <Icon name='world' />
                  <br></br>
                  Habitats
               </NavLink>
            </Button> */}
            
               
      </Header>

    )
}

export default NavBar;