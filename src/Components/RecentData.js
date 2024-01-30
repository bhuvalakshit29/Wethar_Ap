import React from 'react';

const RecentData = ({ recentdata, onResearch, onRemove }) => {
  let content;

  const handleRemove = (index) => {
    onRemove(index);
  };

  if (recentdata.length > 0) {
    content = (
      <ul>
        {recentdata.map((data, index) => (
          <li key={index}>
            Latitude: {data.lat}, Longitude: {data.lon}{' '}
            <button className='btn btn-outline-primary' onClick={() => onResearch(data.lat, data.lon)}>Show Data</button>
            <button className='btn btn-outline-danger ms-3' onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>No recent data available.</p>;
  }

  return content;
};

export default RecentData;
