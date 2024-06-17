import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';
import MainItem from './components/MainItem';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState({ city: '', fullLocation: '', guests: 0 });
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(0);
  const [showModals, setShowModals] = useState(false);
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);  // Nuevo estado

  async function getData() {
    const response = await fetch('/data/stays.json');
    const jsonData = await response.json();

    const filtroAll = jsonData.map(char => ({
      id: char.id,
      photo: char.photo,
      type: char.type,
      beds: char.beds,
      rating: char.rating,
      title: char.title,
      superHost: char.superHost,
      city: char.city,
      country: char.country,
      maxGuests: char.maxGuests
    }));
    setFilteredData(filtroAll);
    setData(filtroAll);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleSearch() {
    setHasSearched(true);  // Establecer que se ha realizado una búsqueda
    const city = search.city.split(',')[0].trim(); // Obtener solo la ciudad para la búsqueda
    const guestNumber = parseInt(search.guests, 10); // Convertir el número de huéspedes a entero
    const results = data.filter(char => 
      char.city.toLowerCase().includes(city.toLowerCase()) &&
      char.maxGuests >= guestNumber
    );
    setFilteredData(results);
    setShowModals(false);
  }

  function resetFilter() {
    setFilteredData(data);
    setSearch({ city: '', fullLocation: '', guests: 0 });
    setLocation('');
    setGuests(0);
    setShowLocationOptions(false);
    setShowGuestOptions(false);
    setHasSearched(false);  // Restablecer el estado de búsqueda
  }

  return (
    <>
      <Header 
        setShowModals={setShowModals}
        search={search}
        setSearch={setSearch}
        resetFilter={resetFilter}
        setShowLocationOptions={setShowLocationOptions}
        setShowGuestOptions={setShowGuestOptions}
      />

      <Main search={search} data={data} filteredData={filteredData} hasSearched={hasSearched}>
        {filteredData && filteredData.map((char, index) => (
          <MainItem key={index} char={char} />
        ))}
      </Main>

      {showModals && (
        <Modal
          data={data}
          search={search}
          setSearch={setSearch}
          setLocation={setLocation}
          setGuests={setGuests}
          handleSearch={handleSearch}
          setFilteredData={setFilteredData}
          setShowModals={setShowModals}
          showLocationOptions={showLocationOptions}
          showGuestOptions={showGuestOptions}
          setShowLocationOptions={setShowLocationOptions}
          setShowGuestOptions={setShowGuestOptions}
        />
      )}
    </>
  );
}

export default App;
