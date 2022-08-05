import React from "react";
import { Card } from "semantic-ui-react";
// import { Image, Header, Button, Icon } from "semantic-ui-react";

function ResponseCard ({realtor_id, home_buyer_id, locationNeed, description, wish1, wish2, wish3}){

    return (
            <Card>
                    <Card.Content class="header">
                        <h3>Realtor {realtor_id}'s Response
                        <br></br>
                        to Buyer {home_buyer_id}</h3>
                    </Card.Content >
                    <Card.Content  class="header">
                        <h4>Location:</h4>
                        {locationNeed}
                    </Card.Content >
                    <Card.Content  class="header">
                        <h4>Realtor's description of wishes granted:</h4> 
                        {description}
                    </Card.Content >
            </Card>

    )
}


export default ResponseCard;