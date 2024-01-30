import React from 'react';

const WeatherForm = ({ lat, lon, onLatChange, onLonChange, onSubmit, onGetCurrentLocation }) => {
  return (
    <form id="weatherForm" onSubmit={onSubmit}>
      <input
        type="text"
        name="lat"
        value={lat}
        onChange={(e) => onLatChange(e.target.value)}
        placeholder="Enter Latitude"
      />
      <input
        type="text"
        name="lon"
        value={lon}
        onChange={(e) => onLonChange(e.target.value)}
        placeholder="Enter Longitude"
      />
      <button className='btn btn-outline-danger me-3' type="submit">Submit</button>
      <button className='btn btn-outline-danger' type="button" onClick={onGetCurrentLocation}>
        Get Current Location
      </button>
    </form>
  );
};

export default WeatherForm;
