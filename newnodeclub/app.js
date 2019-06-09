var path = require('path')
var express=  require('express')
var config = require('./config.js')
var compress = require('compression')
var bodyParser = require('body-parser')
var session = require('express-session')
var RedisStore = require('connect-redis')(session)
var restfulapi = require('./restfulapi')
var app = express()
app.use(require('response-time')())
app.use(require('method-override')())
app.use(bodyParser.json({limit:'1mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb'}))
app.use(compress())
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-origin","*")
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT')
    next()
})
app.use(session({
    secret: config.session_secret,
    store: new RedisStore({
        port: config.redis_port,
        host: config.redis_host,
        db:config.redis_db,
        pass: config.redis_password
    }),
    resave: false,
    saveUninitialized:false
}))

// app.set('views', path.join(__dirname, 'views'))

// app.engine('html', require('ejs-mate'))
// app.set('view engine', 'html')
// app.use(requestLog)

// app.use('/', webRouter)
app.use('/', restfulapi)


app.listen(3000, function(){
    console.log('server starts at 3000')
})

