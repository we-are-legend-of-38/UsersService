import React from 'react'

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <select>
        <option value="Your Profile">Your Profile</option>
        <option value="Settings">Settings</option>
        <option value="Log Out">Log Out</option>
      </select>
    </div>
  );
}

export default Dropdown;
