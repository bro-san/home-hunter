import React from "react";
import { Card } from "semantic-ui-react";
// import { Image, Header, Button, Icon } from "semantic-ui-react";

function ResponseCard ({realtorName, homeBuyerName, description, location}){

    return (
            <Card>
                    <Card.Content class="header">
                        <h3>Realtor {realtorName}'s Response
                        <br></br>
                        to Buyer {homeBuyerName}</h3>
                    </Card.Content >
                    <Card.Content  class="header">
                        <h4>Location:</h4>
                        {location}
                    </Card.Content >
                    <Card.Content  class="header">
                        <h4>Realtor's description of wishes granted:</h4> 
                        {description}
                    </Card.Content >
            </Card>

    )
}


export default ResponseCard;