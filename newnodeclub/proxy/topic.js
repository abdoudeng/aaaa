var EventProxy = require('eventproxy')
var models = require('../models')
var Topic =  models.Topic
var User = require('./user')
var Reply = require('./reply')
var tools = require('../common/tools')
var at = require('../common/at')
var _ = require('lodash')


exports.getTopicById = function(id, callback){
    var proxy = new EventProxy()
    var events = ['topic','author','last_reply']
    proxy.assign(events, function(topic, author, last_reply){
        if(!author){
            return callback(null, null, null, null)
        }
        return callback(null, topic, author, last_reply)
    }).fail(callback)
    Topic.findOne({_id: id}, proxy.done(function(topic){
        if(!topic){
            proxy.emit('topic', null)
            proxy.emit('topic', null)
            proxy.emit('last_reply', null)
            return 
        }
        proxy.emit('topic', topic)
        User.getUserById(topic.author_id, proxy.done('author'))
        if(topic.last_reply){
            Reply.getReplyById(topic.last_reply, proxy.done(function(last_reply){
                proxy.emit('last_reply', last_reply)
            }))
        }else{
            proxy.emit('last_reply',null)
        }
    }))
}
exports.getCountByQuery = function(query, callback){
    Topic.countDocuments(query, callback)
}
exports.getTopicsByQuery = function(query, opt, callback){
    query.deleted = false
    Topic.find(query, {}, opt, function(err, topics){
        if(err){
            return callback(err)
        }
        if(topics.length === 0){
            return callback(null, [])
        }
        var proxy = new EventProxy()
        proxy.after('topic_ready', topics.length, function(){
            topics = _.compact(topics)
            return callback(null, topics)
        })
        proxy.fail(callback)
        topics.forEach(function(topic, i){
            var ep = new EventProxy()
            ep.all('author', 'reply', function(author, reply){
                if(author){
                    topic.author = author
                    topic.reply = reply
                }else{
                    topics[i] =  null
                }
                proxy.emit('topic_ready')
            })
           User.getUserById(topic.author_id, ep.done('author'))
           Reply.getReplyById(topic.last_reply, ep.done('reply')) 
        })
    })
}
exports.getLimit5w = function(callback){
    Topic.find({deleted: false}, '_id', {limit: 50000, sort: '-create_at'}, callback)
}
exports.getFullTopic = function(id, callback){
    var proxy = new EventProxy()
    var events = ['topic','author','replies']
    proxy.assign(events, function(topic, author, replies){
        callback(null, '', topic, author, replies)
    }).fail(callback)
    Topic.findOne({_id: id, deleted: false}, proxy.done(function(topic){
        if(!topic){
            proxy.unbind()
            return callback(null, '此话题不存在或已被删除')
        }
        at.linkUsers(topic.content, proxy.done('topic', function(str){
            topic.linkedContent = str
            return topic
        }))
        User.getUserById(topic.author_id, proxy.done(function(author){
            if(!author){
                proxy.unbind()
                return callback(null, '话题的作者丢了')
            }
            proxy.emit('author', author)
        }))
        Reply.getRepliesByTopicId(topic_id, proxy.done('replies'))
    }))
}

exports.getTopic = function(id, callback){
    Topic.findOne({_id: id}, callback)
}

exports.updateLastReply = function(topicId, replyId, callback){
    Topic.findOne({_id: topicId}, function(err, topic){
        if(err || !topic){
            return callback(err)
        }
        topic.last_reply = replyId
        topic.last_reply_at = new Date()
        topic.reply_count += 1
        topic.save(callback)
    })
}

exports.reduceCount = function(id, callback){
    Topic.findOne({_id: id}, function(err, topic){
        if(err){
            return callback(err)
        }
        if(!topic){
            return callback(new Error('该主题不存在'))
        }
        topic.reply_count -=1
        Reply.getLastReplyByTopId(id, function(err, reply){
            if(err){
                return callback(err)
            }
            if(reply.length !== 0){
                topic.last_reply = reply[0]._id
            }else{
                topic.last_reply = null
            }
            topic.save(callback)
        })
    })
}

exports.newAndSave= function(title, content, tab, authorId, callback){
    var topic = new Topic()
    topic.title = title
    topic.content = content
    topic.tab = tab
    topic.author_id  = authorId
    topic.save(callback)
}


