var eventproxy = require('eventproxy')
var CarProxy =  require('../../proxy/car')

exports.index = function(req,res,next){
    var name = req.query.name
    var ep = new eventproxy()
    ep.fail(next)
    CarProxy.getCarByName(name, ep.done(function(car){
            if(!car){
                res.status(404)
                return res.send({success: false, error_msg: '汽车不存在'})
            }
            res.send(car)
        }))
    
}
exports.search = function(req,res,next){
    var name = req.query.name
    var ep = new eventproxy()
    ep.fail(next)
    CarProxy.getCarByName(name, ep.done(function(car){
            if(!car){
                res.status(404)
                return res.send({success: false, error_msg: '汽车不存在'})
            }
            console.log(car)
            res.send(car)
        }))
    
}
exports.add = function(req,res,next){
    var qichebianhao = req.body.qichebianhao
    var manufacturer = req.body.manufacturer
    var price = req.body.price
    var purchaseDate = req.body.purchaseDate
    var name = req.body.name
    var requireLisence = req.body.requireLisence
    CarProxy.newAndSave(qichebianhao, manufacturer
        , price,
        purchaseDate,
        name,
        requireLisence, function(){
            console.log('save car')
            res.send('ok')
        })
}