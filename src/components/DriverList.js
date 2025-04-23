import React from 'react';

function DriverList({ drivers, onDriverSelect, selectedDriver }) {
  return (
    <ul>
      {drivers.map(driver => (
        <li
          key={driver.id}
          onClick={() => onDriverSelect(driver)}
          className={selectedDriver && selectedDriver.id === driver.id ? 'selected' : ''}
        >
          {driver.name} ({driver.team}) - {driver.country}
        </li>
      ))}
    </ul>
  );
}

export default DriverList; 