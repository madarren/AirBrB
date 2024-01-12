import React from 'react';
import BigButton from '../components/BigButton';
import PropTypes from 'prop-types';
import ListingCard from '../components/ListingCard';

const ListingNew = (props) => {
  const [listings, setListings] = React.useState([]);
  const [newListingTitle, setNewListingTitle] = React.useState('');
  const [newListingAddress, setNewListingAddress] = React.useState('');
  const [newListingPrice, setNewListingPrice] = React.useState('');
  const [newListingThumbnail, setNewListingThumbnail] = React.useState('');
  const [newListingType, setNewListingType] = React.useState('');
  const [newListingBathrooms, setNewListingBathrooms] = React.useState('');
  const [newListingBedrooms, setNewListingBedrooms] = React.useState('');
  const [newListingAmenities, setNewListingAmenities] = React.useState('');

  const newListing = async (args) => {
    const response = await fetch('http://localhost:5005/listings/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify(args),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      fetchListings();
    }
  }

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
      <h3>Current listings:</h3>
      {listings.map((listing, idx) => {
        console.log(listing);
        // style goes in this div under
        return (
          <div key={listing.id} >
            <ListingCard listing={listing} token={props.token} refreshListings={fetchListings}/>
          </div>
        )
      })}
      <hr />
      Create a new listing: <br />
      Title: <input type="text" name="title" value={newListingTitle} onChange={(e) => setNewListingTitle(e.target.value)} /><br />
      Address: <input type="text" name="address" value={newListingAddress} onChange={(e) => setNewListingAddress(e.target.value)} /><br />
      Price per night: <input type="text" name="price" value={newListingPrice} onChange={(e) => setNewListingPrice(e.target.value)} /><br />
      Thumbnail: <input type="file" name="photo" value={newListingThumbnail} onChange={(e) => setNewListingThumbnail(e.target.value)} /><br />
      Property Type: <input type="text" name="property" value={newListingType} onChange={(e) => setNewListingType(e.target.value)} /><br />
      Bathrooms: <input type="text" name="bathrooms" value={newListingBathrooms} onChange={(e) => setNewListingBathrooms(e.target.value)} /><br />
      Bedrooms: <input type="text" name="bedrooms" value={newListingBedrooms} onChange={(e) => setNewListingBedrooms(e.target.value)} /><br />
      Amenities: <input type="text" name="amenities" value={newListingAmenities} onChange={(e) => setNewListingAmenities(e.target.value)} /><br />
      <br />
      <BigButton name='createBtn' onClick={() => newListing({
        title: newListingTitle,
        address: { street: newListingAddress },
        price: newListingPrice,
        thumbnail: newListingThumbnail,
        metadata: {
          type: newListingType,
          bathrooms: newListingBathrooms,
          bedrooms: newListingBedrooms,
          amenities: newListingAmenities,
        }
      })}>Create!</BigButton>
    </>
  );
}
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='

export default ListingNew;

ListingNew.propTypes = {
  token: PropTypes.string,
//  onClick: PropTypes.func,
//  children: PropTypes.optionalNode
};
