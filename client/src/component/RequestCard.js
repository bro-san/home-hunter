import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
// import { Image, Header } from "semantic-ui-react";

function RequestCard ({ key, id, buyer_id, locationSize, comment, wish1, wish2, wish3, image, handleDelete}){

    function handleClick() {
        fetch(`http://localhost:3000/requests/${id}`, {
            method: "DELETE"
        })
        handleDelete(id)  
    }

    return (
        <Card>
                <Card.Content class="header">
                    <h3>Buyer {buyer_id}'s Request</h3>
                </Card.Content >
                <Card.Content class="header">
                    <img src={image} alt={buyer_id + "'s request"}/>
                </Card.Content>
                {/* <Card.Content  class="header">Willing to relocate: {locationNeed ? "Yes":"No"} </Card.Content > */}
                <Card.Content  class="header">
                    <h4>Desired size of home: </h4>
                    {locationSize} sq. ft.
                </Card.Content >
                <Card.Content  class="header">
                <h4>Buyer's wish #1: </h4>
                {wish1}
                </Card.Content >
                <Card.Content  class="header">
                <h4>Buyer's wish #2: </h4>
                {wish2}
                </Card.Content>
                <Card.Content  class="header">
                <h4>Buyer's wish #3: </h4>
                {wish3}
                </Card.Content >
                <Card.Content  class="header">
                    <h4>Buyer's comments:</h4>
                    {comment}
                </Card.Content >
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