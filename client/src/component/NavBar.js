import React from "react";
import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return (
      <Header>
         <Menu textAlign="center">
            <Menu.Menu position='left'>
               <Menu.Item class='navbar'>
                  <NavLink exact to='/home'>   
                     <Button>Home</Button>
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
                  <NavLink exact to='/login'>   
                     <Button>Log-in</Button>
                  </NavLink>
               </Menu.Item>
            </Menu.Menu>
         </Menu>
      </Header>
    )
}

export default NavBar;