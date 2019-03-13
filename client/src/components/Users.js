import React, { useState } from 'react';

const Users = () => {
  const [firstName, setFirstName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <div className="User">{firstName}</div>
      <div className="Location">{location}</div>
    </div>
  );
}
export default Users;