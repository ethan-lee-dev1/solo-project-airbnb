import { useEffect, useState } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import { Navbar } from "./Navbar";

const AirBnB = () => {
  const [listing, setListing] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
      })
      .catch((err) => console.log("Unable to fetch Data: ERROR: ", err));
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(listing.length / itemsPerPage));
  }, [listing]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = listing.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        {subset.map((airBnB) => (
          <li key={airBnB._id}>
            <img src={airBnB.images.picture_url}></img>
            <div>{airBnB.name}</div>
            <br />
            Available for: {airBnB.room_type}
            <br />
            Bedrooms / Bathrooms: {airBnB.beds} / {airBnB.bathrooms}
            <br />
            Can book from {airBnB.minimum_nights} nights to{" "}
            {airBnB.maximum_nights} nights
            <br />
            Price: ${airBnB.price} per night
            <br />
            {/* Render other desired properties */}
          </li>
        ))}
      </div>
      <div className="flex">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
        />
      </div>
    </>
  );
};

export default AirBnB;
