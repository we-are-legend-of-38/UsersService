const path = require('path');


const userData = [
  {
    id: 1,
    firstName: "Eric",
    location: "Austin, TX",
    userIcon: path.join(__dirname + 'sample_data/user_icons/sonic.png')
  },
  {
    id: 2,
    firstName: "Sean",
    location: "Phoeniz, AZ",
    userIcon: "./user_icons/pirate.png"
  },
  {
    id: 3,
    firstName: "Gabriel",
    location: "Portland, Oregon",
    userIcon: "./user_icons/ninja-turtle.png"
  }
];
module.exports = userData;