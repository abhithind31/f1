import React, { useState } from 'react';
import './App.css';
import drivers from './drivers';

function App() {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleDriverClick = (driver) => setSelectedDriver(driver);
  const handleCloseDetails  = () => setSelectedDriver(null);

  // Helper to add the champion label
  const formatName = (name) =>
    name === 'Max Verstappen' ? `${name} – World Champion` : name;

  return (
    <div className="App">
      <h1>F1 Drivers 2024</h1>

      <ul>
        {drivers.map((driver) => (
          <li
            key={driver.id}
            onClick={() => handleDriverClick(driver)}
            className={
              selectedDriver?.id === driver.id ? 'selected' : ''
            }
          >
            {formatName(driver.name)} ({driver.team}) – {driver.country}
          </li>
        ))}
      </ul>

      {selectedDriver && (
        <div className="driver-details">
          <h2>{formatName(selectedDriver.name)} Details</h2>
          <p><strong>Team:</strong> {selectedDriver.team}</p>
          <p><strong>Country:</strong> {selectedDriver.country}</p>
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
