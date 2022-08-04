import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
// import { Image, Header } from "semantic-ui-react";

function RequestCard ({buyer_id, locationNeed, comment, wish1, wish2, wish3}){

    return (
        <Card>
                <Card.Content class="header">{buyer_id}'s Request</Card.Content >
                <Card.Content  class="header">Desired size of home: {locationNeed} ft</Card.Content >
                <Card.Content  class="header">Buyer's wish #1: {wish1}</Card.Content >
                <Card.Content  class="header">Buyer's wish #2: {wish2}</Card.Content>
                <Card.Content  class="header">Buyer's wish #3:{wish3}</Card.Content >
                <Card.Content  class="header">Buyer's comments:{comment}</Card.Content >
                    <Button >Respond</Button>
                <Button animated>
                    <Button.Content visible>Delete Request?</Button.Content>
                    <Button.Content hidden>
                        <Icon name='close' />
                    </Button.Content>
                </Button>
        </Card>

    )
}


export default RequestCard;