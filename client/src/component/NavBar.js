import React from "react";
import { Menu, Header, Button }  from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return (

        <Header>
            <Menu textAlign="center">
               <Menu.Item>
                  <NavLink exact to='/'>   
                     <Button>Home</Button>
                  </NavLink>
               </Menu.Item>
               <Menu.Menu position='right'>
                  <Menu.Item class='navbar'>
                     <Button primary>Sign up</Button>
                  </Menu.Item>
                  <Menu.Item class='navbar'>
                     <Button>Log-in</Button>
                  </Menu.Item>
               </Menu.Menu>
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