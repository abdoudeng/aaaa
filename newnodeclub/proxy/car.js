var models = require('../models/buildSchema')

var Car = models.Car

exports.getCarByQichebianhao = function(bianhao, callback){
    if(bianhao.length === 0){
        return callback(null, [])
    }
    Car.find({ qichebianhao: {$in: bianhao}}, callback)
}


exports.getCarByName = function(name, callback){
    if(name.length === 0){
        return callback(null, [])
    }
    Car.find({ name: {$in: name}}, callback)
}

exports.newAndSave = function(qichebianhao, manufacturer, price, purchaseDate, name, requireLisence, callback){
    var car = new Car()
    car.qichebianhao = qichebianhao
    car.manufacturer = manufacturer
    car.price  = price
    car.purchaseDate = purchaseDate
    car.name = name
    car.requireLisence = requireLisence
    car.save(callback)
}
// newAndSave(1,'Toyota','155800','2019-6-7','CHR','C1',function(rep){
//     console.log(rep)
// })