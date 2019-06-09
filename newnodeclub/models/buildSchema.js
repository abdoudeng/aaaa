var mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1/node_club_dev',{
    poolSize: 20,
    useCreateIndex: true
}, function(err){
    if(err){
        console.log(err)
    }
    console.log('done connect')
})

require('./record.js')
require('./driver.js')
require('./car.js')

exports.Driver = mongoose.model('Driver')
exports.Record = mongoose.model('Record')
exports.Car    = mongoose.model('Car')
