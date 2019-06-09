var EventProxy = require('eventproxy')
var _ = require('lodash')
var Message = require('../models').Message
var User = require('./user')
var Topic = require('./topic')
var Reply = require('./reply')

exports.getMessagesCount = function(id, callback){
    Message.countDocuments({master_id: id, has_read: false}, callback)
}

exports.getMessageById = function(id, callback){
    Message.findOne({_id:id}, function(err, message){
        if(err){
            return callback(err)
        }
        getMessageRelations(message, callback)
    })
}
var getMessageRelations = exports.getMessageRelations = function(message, callback){
    if(message.type === 'reply' || message.type === 'reply2' || message.type == 'at'){
        var proxy = new EventProxy()
        proxy.fail(callback)
        proxy.assign('author', 'topic', 'reply', function(author, topic, reply){
            message.author = author
            message.topic = topic
            message.reply = reply
            if(!author || !topic){
                message.is_invalid = true
            }
            return callback(null, message)
        })
        User.getUserById(message.author_id, proxy.done('author'))
        Topic.getTopicById(message.topic_id, proxy.done('topic'))
        Reply.getReplyById(message.reply_id, proxy.done('reply'))
    }else{
        return callback(null, { is_invalid: true})
    }
}

exports.getReadMessagesByUserId = function(userId, callback){
    Message.find({master_id: userId, has_read: true}, null, {sort: '-create_at', limit: 20}, callback)
}

exports.updateMessagesToRead = function(userId, messages, callback){
    callback = callback || _.noop
    if(message.length===0){
        return callback()
    }
    var ids = message.map(function(m){
        return m.id
    })
    var query  { master_id: userId, _id: {$in:ids}}
    Message.updateMany(query, { $set: {has_read: true}}).exec(callback)
}


exports.updateOneMessageToRead = function( msg_id, callback){
    callback = callback || _.noop
    if(!msg_id){
        return callback()
    }
    var query = { _id:msg_id}
    Message.updateMany(query, {$set:{has_read: true}}).exec(callback)
}

