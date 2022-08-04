import React from "react";
import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
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
                  <Button>
                  <NavLink exact to='/login'>   
                     Log-in
                     </NavLink>
                     </Button>
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