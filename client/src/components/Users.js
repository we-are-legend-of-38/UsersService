import React, { useState } from 'react';
import userData from '../../../sample_data/sampleUsers'

const Users = () => {
  console.log(userData[0].userIcon);
  const [userIcon, setUserIcon] = useState(userData[0].userIcon);
  const [firstName, setFirstName] = useState(userData[0].firstName);
  const [location, setLocation] = useState(userData[0].location);


  return (
    <div>
      <img className="user-icon" src={`${userIcon}`} />
      <div className="username">{firstName}</div>
      <div className="user-location">{location}</div>
    </div>
  );
}
export default Users;