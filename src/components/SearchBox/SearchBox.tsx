import * as React from 'react';

export const SearchBox = () => {
  return (
    <div className="search-box">
      <h2>Where are  you going?</h2>
      <label
        id="search-box-label"
        htmlFor="search-box-input"
      >
        Pick-up Location
      </label>
      <input
        id="search-box-input"
        className="search-box__input"
        type="text"
        placeholder="city, airport, station, region and district..."
        aria-labelledby="search-box-label"
      />
    </div>
  );
};
