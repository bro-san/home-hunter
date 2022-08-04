import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
// import { Image, Header } from "semantic-ui-react";

function RequestCard ({id, buyer_id, locationSize, comment, wish1, wish2, wish3, image, handleDelete}){

    function handleClick() {
        fetch(`http://localhost:3000/requests/${id}`, {
            method: "DELETE"
        })
        handleDelete(id)  
    }

    return (
        <Card>
                <Card.Content class="header">{buyer_id}'s Request</Card.Content >
                <Card.Content class="header"><img src={image} alt={buyer_id + "'s request"}/></Card.Content>
                {/* <Card.Content  class="header">Willing to relocate: {locationNeed ? "Yes":"No"} </Card.Content > */}
                <Card.Content  class="header">Desired size of home: {locationSize} ft</Card.Content >
                <Card.Content  class="header">Buyer's wish #1: {wish1}</Card.Content >
                <Card.Content  class="header">Buyer's wish #2: {wish2}</Card.Content>
                <Card.Content  class="header">Buyer's wish #3:{wish3}</Card.Content >
                <Card.Content  class="header">Buyer's comments:{comment}</Card.Content >
                    <Button >Respond</Button>
                <Button animated onClick={handleClick}>
                    <Button.Content visible >Delete Request?</Button.Content>
                    <Button.Content hidden>
                        <Icon name='close' />
                    </Button.Content>
                </Button>
        </Card>

    )
}


export default RequestCard;