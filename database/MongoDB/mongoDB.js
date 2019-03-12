const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/Legend38';

mongoose.connect(mongoDB, { userNewUrlParser: true });
mongoose.Promise = global.Promise;


let userSchema = mongoose.Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  email: { type: String, unique: true },
  password: { type: String, unique: false }
});

let User = mongoose.model('User', userSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));