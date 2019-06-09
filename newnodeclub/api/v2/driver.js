var eventproxy = require('eventproxy')
var DriverProxy =  require('../../proxy/driver')

exports.index = function(req,res,next){
    var name = req.query.driver
    var ep = new eventproxy()
    ep.fail(next)
    DriverProxy.getDriverByName(name, ep.done(function(car){
            if(!car){
                res.status(404)
                return res.send({success: false, error_msg: '汽车不存在'})
            }
            res.send(car)
        }))
    
}
exports.search = function(req,res,next){
    var name = req.query.driver
    var ep = new eventproxy()
    ep.fail(next)
    DriverProxy.getDriverByName(name, ep.done(function(car){
            if(!car){
                res.status(404)
                return res.send({success: false, error_msg: '汽车不存在'})
            }
            res.send(car)
        }))
    
}
exports.add = function(req,res,next){
    var name = req.body.name
    var license = req.body.license
    var age = req.body.age
    var rating = req.body.rating
    var count = req.body.count
    var ep = new eventproxy()
    ep.fail(next)
    DriverProxy.newAndSave(name, license, age , rating, count,function(){
        console.log('save done')
        res.send('ok')
    })
}