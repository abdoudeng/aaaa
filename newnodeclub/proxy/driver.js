var models = require('../models/buildSchema')

var Driver = models.Driver

exports.getDriverByName = function(name, callback){
    if(name.length === 0){
        return callback(null, [])
    }
    Driver.find({ name: {$in: name}}, callback)
}


exports.getDriverByLicense = function(license, callback){
    if(license.length === 0){
        return callback(null, [])
    }
    Driver.find({ license: {$in: license}}, callback)
}

exports.newAndSave = function(name, license, age, rating, count,callback){
    var driver = new Driver()
    driver.name = name
    driver.license = license
    driver.age = age
    driver.rating = rating
    driver.count = count
    driver.save(callback)
}

// newAndSave('dengqishun','4521331',26,'A+',1, function(){
//     console.log('add new user')
// })