import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Icon } from "semantic-ui-react";



const RequestDetail = () => {
   const [request, setRequest] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);

   const { id } = useParams();

   useEffect(() => {
      fetch(`http://localhost:3000/requests/${id}`)
         .then((r) => r.json())
         .then((request) => {
            setRequest(request);
            setIsLoaded(true);
         });
   }, [id]);

   if (!isLoaded) return <h2>Loading...</h2>;

   const { home_buyer_id, location_size, comment, wish1, wish2, wish3, image } = request;

   // function handleSubmit(e) {
   //    e.preventDefault();
   //    const updatedRequest = [...easterEggs, eggText]
   //    fetch(`http://localhost:3000/requests/${id}`, {
   //       method: "PATCH",
   //       headers: {
   //          "Content-Type": "application/json",
   //       },
   //       body: JSON.stringify({
   //          easterEggs: newEggs,
   //       }),
   //    })
   //       .then((r) => r.json())
   //       .then((updatedGame) => {onAddEgg(updatedGame)
   //          setEggs(updatedGame.easterEggs)
   //       })
   //       .then(() => {
   //          setEggText("")
            
   //       })
   //    }

   return (
   <Card>
      <Card.Content class="header">{home_buyer_id}'s Request</Card.Content >
      <Card.Content class="header"><img src={image} alt={home_buyer_id + "'s request"}/></Card.Content>
      {/* <Card.Content  class="header">Willing to relocate: {locationNeed ? "Yes":"No"} </Card.Content > */}
      <Card.Content  class="header">Desired size of home: {location_size} ft</Card.Content >
      <Card.Content  class="header">Buyer's wish #1: {wish1}</Card.Content >
      <Card.Content  class="header">Buyer's wish #2: {wish2}</Card.Content>
      <Card.Content  class="header">Buyer's wish #3:{wish3}</Card.Content >
      <Card.Content  class="header">Buyer's comments:{comment}</Card.Content >
</Card>
   );
};

export default RequestDetail;