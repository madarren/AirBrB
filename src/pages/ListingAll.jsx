import React from 'react';
import PropTypes from 'prop-types';

const ListingAll = (props) => {
  const [listings, setListings] = React.useState([]);
  const fetchListings = async () => {
    const response = await fetch('http://localhost:5005/listings', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${props.token}`,
      }
    });
    const data = await response.json();
    setListings(data.listings);
  }

  React.useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      {listings.map((listing, idx) => {
        console.log(listing);
        // style goes in this div under
        // map through users and map listings of each user
        return (
          <>
          <hr />
          {listing.title}<br />
          <div>
            <img alt='Listing picture' width={'250px'} src={listing.thumbnail} />
          </div>
          </>
        )
      })}
    </>
  );
}

export default ListingAll;

ListingAll.propTypes = {
  token: PropTypes.string,
}
