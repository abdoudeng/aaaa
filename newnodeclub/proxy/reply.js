var models = require('../models')
var Reply = models.Reply

var EventProxy = require('eventproxy')
var tools = require('../common/tools')

var User = require('./user')
var at  = require('../common/at')

exports.getReply = function(id, callback){
    Reply.findOne({_id:id}, callback)
}

exports.getReplyById = function(id, callback){
    if(!id){
        return callback(null,null)
    }
    Reply.findOne({_id:id}, function(err, reply){
        if(err){
            return callback(err)
        }
        if(!reply){
            return callback(err, null)
        }
        var author_id = reply.author_id
        User.getUserById(author_id, function(err, author){
            if(err){
                return callback(err)
            }
            reply.author = author
            if(reply.content_is_html){
                return callback(null, reply)
            }
            at.linkUser(reply.content, function(err, str){
                if(err){
                    return callback(err)
                }
                reply.content = str
                return callback(err, reply)
            })
        })
    })
}