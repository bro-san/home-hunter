import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Form, Label, Button, Input } from 'semantic-ui-react';



const RequestDetail = () => {
   const [formData, setFormData] = useState({
      home_buyer_id: "",
      location_size: "",
      comment: "",
      wish1: "",
      wish2: "",
      wish3: "",
      image: "",
    });
  
    const { home_buyer_id, location_size, comment, wish1, wish2, wish3, image} = formData;
  
    const { id } = useParams();
  

   useEffect(() => {
      fetch(`http://localhost:3000/requests/${id}`)
         .then((r) => r.json())
         .then((request) => setFormData(request))
   }, [id]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
  
      fetch(`http://localhost:3000/requests/${id}`, configObj)
        .then((resp) => resp.json())
        .then(console.log("It updated!"));
    };

   return (
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Request</h3>

      <label htmlFor="homeBuyerID">Home ID#</label>
      <input
        type="text"
        id="homeBuyerID"
        name="homeBuyerID"
        value={home_buyer_id}
        onChange={handleChange}
      />

      <label htmlFor="locationSize">Location Size</label>
      <input
        type="text"
        id="locationSize"
        name="locationSize"
        value={location_size}
        onChange={handleChange}
      />

      <label htmlFor="wish1">Wish #1</label>
      <input
        type="text"
        id="wish1"
        name="wish1"
        value={wish1}
        onChange={handleChange}
      />

      <label htmlFor="wish2">Wish #2</label>
      <input
        type="text"
        id="wish2"
        name="wish2"
        value={wish2}
        onChange={handleChange}
      />

      <label htmlFor="wish3">Wish #3</label>
      <input
        type="text"
        id="wish3"
        name="wish3"
        value={wish3}
        onChange={handleChange}
      />

      <label htmlFor="image">Inspirational Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleChange}
      />

      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
      />

      <button type="submit">Update Project</button>
    </form>
  );
};

export default RequestDetail;