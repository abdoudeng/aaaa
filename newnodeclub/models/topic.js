var mongoose = require('mongoose')
var BaseModel = require('./base_model')
var Schema =mongoose.Schema

var ObjectId = Schema.ObjectId
var config =require('../config')
var _ = require('lodash')

var TopicSchema = new Schema({
    title: {type: String},
    content: {type: String},
    author_id : {type: ObjectId},
    top: {type: Boolean, default: false},
    good: {type: Boolean, default: false},
    lock: {type: Boolean, default: false},
    reply_count: {type: Number,default: 0},
    visit_count: {type: Number,default: 0},
    collect_count: {type: Number,default: 0},
    creat_at: { type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now},
    last_reply: { type: ObjectId},
    last_reply_at: {type: Date, default: Date.now},
    content_is_html: {type: Boolean},
    tab: { type: String},
    deleted: {type: Boolean, default: false}

})

TopicSchema.plugin(BaseModel)
TopicSchema.index({create_at: -1})
TopicSchema.index({ top: -1, last_reply_at:-1})
TopicSchema.index({author_id: 1, creat_at:-1})

mongoose.model('Topic', TopicSchema)
