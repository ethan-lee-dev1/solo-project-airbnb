import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";

export const AirBnBdetail = (props) => {
  const [listing, setListing] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
      })
      .catch((err) => console.log("Unable to fetch Data: ERROR: ", err));
  }, []);

  return (
    <>
      <div>
        <h1>{listing.name}</h1>
        
      </div>
    </>
  );
};
