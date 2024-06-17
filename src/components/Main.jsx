import React from 'react';

export default function Main({ children, search, data, filteredData, hasSearched }) {
  const city = search.fullLocation.split(',')[0].trim();
  const isAllDataShown = data.length === filteredData.length;

  return (
    <main>
      <section className="stays">
        <h1>Stays in {isAllDataShown ? "any accommodation" : city}</h1>
        <div className="stay-list">
          {filteredData.length > 0 ? (
            children
          ) : hasSearched ? (
            <p className="no-results-message">We don't have what you want for now :(</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
