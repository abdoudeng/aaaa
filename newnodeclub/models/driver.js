var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DriverSchema = new Schema({
    name: {type: String},
    license: { type: String},
    age: { type: Number},
    rating: { type: String},
    count: {type: Number, default: 0}
})
 
mongoose.model('Driver', DriverSchema)
