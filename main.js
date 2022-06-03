const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/app';
const User = require('./models/User');
const data = require('./data.js');

mongoose.connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to ${x.connection.name} database`);
  })
  .then(() => {
   return User.create({name: 'Cristian', email: 'ironhack@ironhack.com', age: 31, programmingLevel: 'beginner'})
  })
  .then((user) => {
    console.log('Created: ', user)
  })
  .then(() => {
    return User.findOneAndUpdate({name: 'Cristian'},{name: 'Cristian AR'})
  })
  .then((user) => {
    console.log('Edited: ', user)
  })
  .then(() => {
    return User.insertMany(data);
  })
  .then((users) => {
    console.log('Created: ', users)
  })
  .then(() => {
    return User.findOneAndDelete({email:"pepe@gmail.com"})
  })
  .then((user) => {
    console.log('Deleted: ', user)
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => {console.log(err)})