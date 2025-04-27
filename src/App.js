import React, { useState } from 'react'; // Import useState
import './App.css';
import drivers from './drivers'; // Import the driver data

function App() {
  // State to keep track of the selected driver
  const [selectedDriver, setSelectedDriver] = useState(null);
  // State for the toggled message
  const [message, setMessage] = useState("Hello, World!");

  // Handler for clicking a driver
  const handleDriverClick = (driver) => {
    setSelectedDriver(driver);
  };

  // Handler for closing the details view
  const handleCloseDetails = () => {
    setSelectedDriver(null);
  };

  // Handler for the toggle message button
  const handleHelloClick = () => {
    // Toggle the message
    setMessage(prevMessage => 
      prevMessage === "Hello, World!" ? "Goodbye, World!" : "Hello, World!"
    );
  };

  return (
    <div className="App">
      <h1>F1 Drivers 2024</h1>
      <ul>
        {drivers.map(driver => (
          <li
            key={driver.id}
            onClick={() => handleDriverClick(driver)} // Add onClick handler
            // Add className for styling selected item (optional, depends on CSS)
            className={selectedDriver && selectedDriver.id === driver.id ? 'selected' : ''}
          >
            {driver.name} ({driver.team}) - {driver.country} {/* Show team and country */}
          </li>
        ))}
      </ul>

      {/* Conditional Details Section */}
      {selectedDriver && (
        <div className="driver-details">
          <h2>{selectedDriver.name} Details</h2>
          <p><strong>Team:</strong> {selectedDriver.team}</p>
          <p><strong>Country:</strong> {selectedDriver.country}</p>
          <button onClick={handleCloseDetails}>Close</button> {/* Add Close button */}
        </div>
      )}

      {/* Add the message toggle button and display */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleHelloClick}>Toggle Message</button>
        <p>{message}</p> {/* Display the current message */}
      </div>
    </div>
  );
}

export default App;
