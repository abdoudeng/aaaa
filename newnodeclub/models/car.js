var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CarSchema = new Schema({
    qichebianhao: {type: Number},
    manufacturer: { type: String},
    price: { type: Number},
    purchaseDate: { type: Date},
    name: {type: String},
    requireLisence: { type: String}
})
 
mongoose.model('Car', CarSchema)
