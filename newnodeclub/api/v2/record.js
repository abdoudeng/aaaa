var eventproxy = require('eventproxy')
var RecordProxy =  require('../../proxy/record')

exports.index = function(req,res,next){
    var name = req.query.record
    var ep = new eventproxy()
    ep.fail(next)
    RecordProxy.getRecordByDriver(name, ep.done(function(car){
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
    RecordProxy.getRecordByDriver(name, ep.done(function(car){
            if(!car){
                res.status(404)
                return res.send({success: false, error_msg: '汽车不存在'})
            }
            res.send(car)
        }))
    
}
exports.add = function(req, res, next){
    
    RecordProxy.newAndSave( req.body, function(err){
                                console.log('err',err)
                                res.send('save aaaa record')
                            }               
        )
}
exports.update = function(req, res, next){
    console.log(req.query)
    RecordProxy.update(req.query, function(){
        res.send('update one')
    })
    res.send('get request')
}