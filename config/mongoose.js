const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/urlShortner');

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'error connecting to db'));

db.once('open', ()=>{
    console.log('conencted to mongodb');
})

module.exports = db;
