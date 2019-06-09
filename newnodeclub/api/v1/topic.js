var models = require('../../models')
var TopicModel =  models.Topic
var TopicProxy = require('../../proxy').Topic
var TopicCollect =require('../../proxy').TopicCollec
var UserProxy = require('../proxy').User 
var UserModel = models.User
var config = require('../../config')
var eventproxy = require('eventproxy')
var _ = require('lodash')
var at = require('../../common/at')
var renderHelper = require('../../common/render_helper')
var validator = require('validator')

