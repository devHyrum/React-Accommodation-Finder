import React, { useEffect, useState } from 'react';
import './Modal.css'
export default function Modal({
  setSearch,
  search,
  data,
  setFilteredData,
  setGuests,
  handleSearch,
  setShowModals,
  showLocationOptions,
  showGuestOptions,
  setShowLocationOptions,
  setShowGuestOptions
}) {
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [uniqueLocations, setUniqueLocations] = useState([]);

  useEffect(() => {
    const locations = new Set(data.map(item => `${item.city}, ${item.country}`));
    setUniqueLocations([...locations]);
  }, [data]);

  useEffect(() => {
    updateGuestInput();
  }, [adultsCount, childrenCount]);

  function updateGuestInput() {
    const totalGuests = adultsCount + childrenCount;
    setGuests(totalGuests);
    setSearch({ ...search, guests: totalGuests });
    const guestInput = document.getElementById('guests-search');

    if (guestInput) {
      guestInput.value = totalGuests > 0 ? `${totalGuests} guests` : '';
      guestInput.placeholder = totalGuests > 0 ? '' : 'Add guests';
    }
  }

  function incrementAdults() {
    setAdultsCount(prevCount => prevCount + 1);
  }

  function decrementAdults() {
    setAdultsCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  }

  function incrementChildren() {
    setChildrenCount(prevCount => prevCount + 1);
  }

  function decrementChildren() {
    setChildrenCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  }

  function handleLocationSelect(location) {
    const city = location.split(',')[0].trim();
    setSearch({ ...search, city: city, fullLocation: location });
    setShowLocationOptions(false);
  }

  function closeModal(event) {
    if (event.target.classList.contains('modal')) {
      setShowModals(false);
    }
  }

  function handleLocationClick() {
    setShowLocationOptions(true);
    setShowGuestOptions(false);
  }

  function handleGuestClick() {
    setShowLocationOptions(false);
    setShowGuestOptions(true);
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="header-modal">
        <div className={`modal-content ${showLocationOptions ? 'active-border' : ''}`}>
          <span className='tittles-input'>LOCATION</span>
          <input
            type="text"
            id="location-search"
            className="location"
            placeholder="Add location"
            value={search.fullLocation}
            onClick={handleLocationClick}
            onChange={(e) => setSearch({ ...search, fullLocation: e.target.value })}
          />
          {showLocationOptions && (
            <ul>
              {uniqueLocations.map((location, index) => (
                <li key={index} onClick={() => handleLocationSelect(location)}>
                  <img src="/svg/location.svg" alt="location SVG" />
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={`modal-content ${showGuestOptions ? 'active-border' : ''}`}>
          <span className='tittles-input'>GUESTS</span>
          <input
            type="text"
            id="guests-search"
            className="guests"
            placeholder="Add guests"
            readOnly
            onClick={handleGuestClick}
          />
          {showGuestOptions && (
            <>
              <div className="guest-counter">
                <span className='subTitle-guest'>Adults</span>
                <span className="age-info">Ages 13 or above</span>
                <span>
                  <button onClick={decrementAdults}>-</button>
                  <span className='count-person'>{adultsCount}</span>
                  <button onClick={incrementAdults}>+</button>
                </span>
              </div>
              <div className="guest-counter">
                <span className='subTitle-guest'>Children</span>
                <span className="age-info">Ages 2-12</span>
                <span>
                  <button onClick={decrementChildren}>-</button>
                  <span className='count-person'>{childrenCount}</span>
                  <button onClick={incrementChildren}>+</button>
                </span>
              </div>
            </>
          )}
        </div>
        <div className="buttonSearch">
          <button onClick={handleSearch}>
            <img src="/svg/searchModal.svg" alt="searchModal SVG" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
