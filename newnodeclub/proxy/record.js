var models = require('../models/buildSchema')

var Record = models.Record

exports.getRecordByDriver = function(driver, callback){
    if(driver.length === 0){
        return callback(null, [])
    }
    Record.find({ driver: {$in: driver}}, callback)
}


exports.getDriverByCarId = function(carId, callback){
    if(carId.length === 0){
        return callback(null, [])
    }
    Record.find({ carID: {$in: carId}}, callback)
}

exports.newAndSave = function(opt,callback){
    var record = new Record()
    record.carId = opt.carId
    record.driver = opt.driver
    record.rating =  opt.rating
    record.violation = opt.violation
    record.gaz = opt.gaz
    record.returnDate  = opt.returnDate
    record.returnLocation = opt.returnLocation
    record.borrowDate = opt.borrowDate
    record.borrowLocation = opt.borrowLocation
    record.save(callback)
}
exports.update = function(opt,callback){
    let k  = opt.age
    Record.updateOne({driver: opt.driver},{age: opt.age })
}
// newAndSave(1, 'dengqishun','A+','no', false, 'shenzhen','2019-6-7','shenzhen','2019-6-7',function(err,rep){
//     console.log(err,rep)
// })