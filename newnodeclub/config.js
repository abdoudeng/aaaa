var path = require('path')
var config = {
    debug: true,
    get mini() { return !this.debug},
    name: 'Nodeclub',
    description: 'cnode community',
    keywords: 'nodejs, node, express',
    site_headers: ['<meta name="author" content="Dengqishun"'],
    site_logo: '/public/images/cnodejs_light.svg',
    site_icon: '/public/image/cnode_icon_32.png',
    site_navs: [
        ['/about','guanyu']
    ],

    site_static_host: '*',
    host: 'localhost',
    google_tracker_id: '',
    cnzz_tracker_id: '',
    db: 'mongodb://127.0.0.1/node_club_dev',
    redis_host: '127.0.0.1',
    redis_port: '6379',
    redis_db: 0,
    redis_password: '',
    session_secret: 'node_club_secret',
    auth_cookie_name:"node_club",
    port: 3000,
    list_topic_count: 20,
    rss: {
        title: 'cnode: node.js prefessional community',
        link: 'http://cnodejs.org',
        language:'zh-cn',
        description: 'cnode professional community',
        max_rss_items: 50
    },
    log_dir: path.join(__dirname, 'logs'),
    mail_opts:{
        host:'smtp.126.com',
        port:25,
        auth:{
            user: 'club@126.com',
            pass: 'club'
        },
        ignoreTLS: true
    },
    weibo_key: 10000000,
    weibo_id: 'dengqishun',

    admin: {user_login_name: true},
    allow_sign_up: true,
    upload: {
        path: path.join(__dirname, 'public/upload'),
        url: 'public/upload'
    },
    create_post_per_day: 1000,
    create_reply_per_day: 1000,
    create_user_per_ip: 1000,
    visit_per_day: 1000
}
if(process.env.NODE_ENV==='test'){
    config.db='mongodb://127.0.0.1/node_club_test'
}
module.exports = config