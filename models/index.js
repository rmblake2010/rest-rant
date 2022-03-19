require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, (err) => {
  if(err) throw err;
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comments')