var models = require('../models')
var User = models.User
var utility = require('utility')
var uuid = require('node-uuid')

exports.getUsersByNames = function(name, callback){
    if(name.length===0){
        return callback(null, [])
    }
    User.find({ loginname: {$in: name }}, callback)

}

exports.getUserById = function(id, callback){
    if(!id){
        return callback()
    }
    User.findOne({_id: id}, callback)
}

exports.getUserByMail = function(id, callback){
    User.find({'_id': {'$in':ids}},callback)
}

exports.getUserByQuery = function(loginname, key, callback){
    User.findOne({loginname: loginname, retrieve_key: key}, callback)
}

exports.newAndSave = function(name, loginname, pass, email, avatar_url, active, callback){
    var user = new User()
    user.name = name;
    user.loginname = loginname;
    user.pass = pass;
    user.email  = email;
    user.avatar  = avatar_url
    user.active = active
    user.accessToken = uuid.v4()
    user.save(callback)
}

var makeGravatar = function(email){
    return 'http://www.gravatar.com/avatar/'+utility.md5(email.toLowerCase())+'?size=48'
}

exports.makeGravatar = makeGravatar
exports.getGravatar = function(user){
    return user.avatar || makeGravatar(user)
}
