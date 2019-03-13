import React, { useState } from 'react';
import userData from '../../../public/sample_data/sampleUsers';

const Users = () => {
  const [userIcon, setUserIcon] = useState(userData[0].userIcon);
  const [firstName, setFirstName] = useState(userData[0].firstName);
  const [location, setLocation] = useState(userData[0].location);


  return (
    <div>
      <img className="user-icon" src={require('../../../public/sample_data/user_icons/' + userIcon)} />
      <div className="username">{firstName}</div>
      <div className="user-location">{location}</div>
    </div>
  );
}
export default Users;