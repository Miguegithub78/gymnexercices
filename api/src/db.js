const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/myexercises')
  .then(db => console.log('Db is connected to', db.connection.host))
  .catch(err => console.log('Error connecting to db', err))