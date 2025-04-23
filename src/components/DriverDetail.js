import React from 'react';

function DriverDetail({ driver, onClose }) {
  if (!driver) {
    return null; // Don't render anything if no driver is selected
  }

  return (
    <div className="driver-details">
      <h2>{driver.name} Details</h2>
      <p><strong>Team:</strong> {driver.team}</p>
      <p><strong>Country:</strong> {driver.country}</p>
      <p><strong>Points:</strong> {driver.points}</p>
      {/* Display new stats */}
      <p><strong>Wins:</strong> {driver.wins}</p>
      <p><strong>Podiums:</strong> {driver.podiums}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default DriverDetail; 