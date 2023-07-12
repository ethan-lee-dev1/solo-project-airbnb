import { useEffect, useState } from "react";
import React from "react";

export const AirBnB = () => {
  const [listing, setListing] = useState([]);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await fetch("/api/");
        console.log(data);
      } catch (error) {
        console.error("Error fetching the listing");
      }
    };
    fetchListing();
  }, []);

  return (
    <div>
      <ul></ul>
    </div>
  );
};
