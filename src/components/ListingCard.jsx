import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import {
  Link,
} from 'react-router-dom';

const ListingCard = ({ listing, token, refreshListings }) => {
  if (!token) {
    return (
      <>
      <hr />
      {listing.title} , {listing.address.street}<br/>
      {listing.price}
      <br />
      <div>
        <img alt='Listing picture' width={'250px'} src={listing.thumbnail} />
      </div>
      </>
    );
  } else {
    console.log('test');
    return (
      <>
        <hr />
        {listing.title} , {listing.address.street}<br />
        {listing.price}<br />
        {/* {listing.metadata.type}, {listing.metadata.bedrooms},
        {listing.metadata.bathrooms}, {listing.metadata.amenities} */}
        <br/>
        <div>
          <img alt='Listing picture' width={'250px'} src={listing.thumbnail} />
        </div>
        <FormControlLabel control={<Switch defaultChecked />} label="Publish" />
        <span>&nbsp; &nbsp;</span>
        <button><Link to="/listing/edit">Edit</Link></button>
        <span>&nbsp; &nbsp;</span>
        <button name="deleteBtn" onClick={async () => {
          console.log(listing);
          // await delete
          await fetch('http://localhost:5005/listings/' + listing.id, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
          refreshListings();
        }}>Delete</button>
    </>
    );
  }
};

export default ListingCard;

ListingCard.propTypes = {
  refreshListings: PropTypes.func,
  listing: PropTypes.object,
  address: PropTypes.object,
  metadata: PropTypes.object,
  token: PropTypes.string,
};
