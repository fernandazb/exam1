const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mydb')
    .then(db => console.log('Coneccion exitosa',db.connection.host))
    .catch(err=> console.error(err));


module.exports = mongoose;
