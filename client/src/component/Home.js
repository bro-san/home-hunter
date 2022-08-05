import React from "react";
import { Header, Container, Menu } from "semantic-ui-react";
// import { Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Home(){
    
    return (
        <Container textAlign="center">
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Welcome to HomeHunter!</h1>  
        </Header>
            <Menu  fluid widths={2} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/realtors">Realtor</Link>
                    </h2>
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    <h2 class="medium">
                        <Link to="/homebuyer">Home Buyer</Link>
                    </h2>
                </Menu.Item>
            </Menu>
        </Container>
    )
}

export default Home;