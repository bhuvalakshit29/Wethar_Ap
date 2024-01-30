import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherContent from './WeatherContent';
import RecentData from './RecentData';

const WeatherDetails = () => {
  const [weatherdata, setWeatherData] = useState([]);
  const [recentdata, setRecentData] = useState([]);
  const [lat, setLat] = useState('21.1702');
  const [lon, setLon] = useState('72.8311');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    await fetchWeatherData();
    recentHandler();
  };

  const fetchWeatherData = async (latitude = lat, longitude = lon) => {
    setLoading(true);

    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7a3232bc459dc104fb473d57a62ca2f7`
      );
      let data = await response.json();
      setWeatherData([data]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const recentHandler = () => {
    setRecentData([...recentdata, { lat, lon }]);
  };

  const researchHandler = async (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
    setLoading(true);
    await fetchWeatherData(latitude, longitude);
  };

  const removeRecentHandler = (index) => {
    const updatedRecentData = [...recentdata];
    updatedRecentData.splice(index, 1);
    setRecentData(updatedRecentData);
  };

  const getCurrentLocationHandler = () => {
    // ... (unchanged)
  };

  return (
    <div className="weather-details">
      <h1>Weather Details</h1>
      <WeatherForm
        lat={lat}
        lon={lon}
        onLatChange={(value) => setLat(value)}
        onLonChange={(value) => setLon(value)}
        onSubmit={submitHandler}
        onGetCurrentLocation={getCurrentLocationHandler}
      />
      {loading && <p>Loading...</p>}
      <WeatherContent weatherdata={weatherdata} />
      <h2>Recent Data</h2>
      <RecentData recentdata={recentdata} onResearch={researchHandler} onRemove={removeRecentHandler} />
    </div>
  );
};

export default WeatherDetails;
