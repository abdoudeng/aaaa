var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
var RecordSchema = new Schema({
    carID: {type: Number},
    driver: { type: String},
    rating: { type: String},
    violation: {type: String},
    gaz: {type: Boolean},
    returnLocation: {type: String},
    returnDate: {type: Date},
    borrowLocation: {type: String},
    borrowDate: {type: Date}
})
 
mongoose.model('Record', RecordSchema)
