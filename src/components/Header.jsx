import React from 'react';

export default function Header({ setShowModals, search, setSearch, resetFilter, setShowLocationOptions, setShowGuestOptions }) {
  function handleLocationInputClick() {
    setShowModals(true);
    setShowLocationOptions(true);
    setShowGuestOptions(false);
  }

  function handleGuestsInputClick() {
    setShowModals(true);
    setShowLocationOptions(false);
    setShowGuestOptions(true);
  }

  return (
    <div className='header'>
      <div className="logo" onClick={resetFilter} style={{ cursor: 'pointer' }}>
        <img src="/svg/logo.svg" alt="logo SVG" />
      </div>
      <div className="search-bar">
        <input 
          className="country" 
          type="text" 
          id="location-input" 
          placeholder="Add location" 
          value={search.fullLocation}
          onClick={handleLocationInputClick}
          onChange={(e) => setSearch({ ...search, fullLocation: e.target.value })}
        />
        <input 
          className="numberPeople" 
          type="text" 
          id="guests-input" 
          placeholder="Add guests" 
          value={search.guests > 0 ? `${search.guests} guests` : ''}
          onClick={handleGuestsInputClick}
          readOnly
        />
        <button>
          <img src="/svg/search.svg" alt="search SVG" />
        </button>
      </div>
    </div>
  );
}
