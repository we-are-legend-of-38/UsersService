const mongoose = require('mongoose');
const port = 27017;
const mongoDB = `mongodb://localhost:${port}/Legend38`;
const options = {
  useNewUrlParser: true,
}

// Mongoose presets 
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = mongoose.connect(mongoDB, { useNewUrlParser: true });

// Create a User schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  email: { type: String, unique: true },
  password: { type: String, unique: false }
});

//  Create a User Model
const User = mongoose.model('User', userSchema);

// Create connection 
const mongoDBConnection = mongoose.connection;

mongoDBConnection.on('connected', () => console.log(`Success: Database connected to port: ${port}`))
mongoDBConnection.on('error', console.error.bind(console, 'Error connecting to MongoDB'));


// Mongoose methods 
const save = async (userObj) => {
  const { firstName, lastName, email, password } = await JSON.parse(userObj).singleUser;
  const userDocument = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }

  const newUserDoc = new User(userDocument);

  newUserDoc.save()
    .then(() => console.log('Success in saving documents'))
    .catch(err => console.log('Error creating new User', err));
}



module.exports = {
  db, User, save
}