import { useEffect, useState } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import { Navbar } from "./Navbar";
import { NavLink } from "react-router-dom";

const AirBnB = () => {
  const [listing, setListing] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        console.log(data);
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

  const filteredListing = listing.filter((list) => {
    return list.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setListing(filteredListing);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <form className="search">
          <input
            type="text"
            placeholder="Search for anything!"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {!listing ? (
        <div>Loading...</div>
      ) : (
        <div>
          {subset.map((airBnB) => (
            <li key={airBnB._id}>
              <div className="flex-container">
                <div className="column">
                  <NavLink to={`/detail/${airBnB._id}`}>
                    <img src={airBnB.images.picture_url}></img>
                  </NavLink>
                </div>
                <div className="column">
                  <div>{airBnB.name}</div>
                  <br />
                  Available for: {airBnB.room_type}
                  <br />
                  Bedrooms: {airBnB.beds} / Bathrooms: {airBnB.bathrooms}
                  <br />
                  Can book from {airBnB.minimum_nights} nights to{" "}
                  {airBnB.maximum_nights} nights
                  <br />
                  Price: ${airBnB.price} per night
                  <br />
                </div>
              </div>
            </li>
          ))}
        </div>
      )}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
    </>
  );
};

export default AirBnB;
