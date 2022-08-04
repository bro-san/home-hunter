import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
// import { Image, Header } from "semantic-ui-react";

function RequestCard ({buyer_id, locationNeed, comment, wish1, wish2, wish3}){

    return (
        <Card>
                <Card.Content class="header">{buyer_id}'s Request</Card.Content >
                <Card.Content  class="header">Desired size of home: {locationNeed} ft</Card.Content >
                <Card.Content  class="header">{wish1}</Card.Content >
                <Card.Content  class="header">{wish2}</Card.Content>
                <Card.Content  class="header">{wish3}</Card.Content >
                <Card.Content  class="header">{comment}</Card.Content >
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