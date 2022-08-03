import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
// import { Image, Header } from "semantic-ui-react";

function RequestCard (){


    return (
        <Card>
                <Card.Content class="header">asdf</Card.Content >
                <Card.Content  class="image">
                    {/* <img /> */}
                </Card.Content >
                <Card.Content  class="header">asadf</Card.Content >
                <Card.Content  class="header">fdsa</Card.Content>
                <Card.Content  class="header"></Card.Content >
                    <Button >Respond</Button>
                <Card.Content  class="header">sdfasf</Card.Content >
                <Card.Content  class="header"></Card.Content>
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