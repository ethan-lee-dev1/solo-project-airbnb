import React, { useEffect } from "react";
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
      <div className="singleListing">
        <h1>{listing.name}</h1>
        <span className="highlight">{listing.description}</span>
        <div>Price per night: ${listing.price}</div>
        {listing.address && (
          <div>
            Street: {listing.address.street}
            <br />
            Country: {listing.address.country}
            {/* Add other address properties here */}
          </div>
        )}
        <div>Cancellation Policy: {listing.cancellation_policy}</div>
        <p>Host Information</p>
        {listing.host && <div>Host name: {listing.host.host_name}</div>}
      </div>
    </>
  );
};
