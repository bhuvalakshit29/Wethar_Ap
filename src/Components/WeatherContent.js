import React from 'react';

const WeatherContent = ({ weatherdata }) => {
  let content;

  if (weatherdata.length > 0) {
    content = (
      <ul>
        {weatherdata.map((weather, index) => (
          <li key={index}>
            <ul>
              <li>Latitude: {weather.coord?.lat}</li>
              <li>Longitude: {weather.coord?.lon}</li>
              {weather.weather && Array.isArray(weather.weather) && weather.weather.length > 0 && (
                <>
                  <li>Description: {weather.weather[0]?.description}</li>
                  <li>Main: {weather.weather[0]?.main}</li>
                </>
              )}
              <li>Temperature Max: {weather.main?.temp_min}</li>
              <li>Temperature Min: {weather.main?.temp_max}</li>
              <li>Wind Speed: {weather.wind?.speed}</li>
              <li>Wind Degree: {weather.wind?.deg}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>No weather data available.</p>;
  }

  return content;
};

export default WeatherContent;
