var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/taizhang',{
        poolSize: 20,
        userCreateIndex: true,
        useNewUrlParser:true
}, function(err){
        if(err){
                console.log(err)
        }
})
var Schema = mongoose.Schema

var entity = new Schema({
        xuhao: {type: Number},
        shebeibianhao : {type: String},
        shebeimingcheng:{type: String},
        shebeileibie:{type: String},
        xinghaoguige:{type: String},
        nengli:{type: String},
        gonglv: {type: String},
        chuchangriqi: {type: Date},
        chuchangbianhao: {type: String},
        shengchanchangjia: {type: String},
        fadongjibianhao: {type: String},
        dipanbianhao: {type: String},
        zaiyonghaishixianzhi: {type: String},
        jishuzhuangkuang: {type: String},
        suozaidanwei: {type: String},
        gengxinshijian: {type: String},
        shoucijinchangshijian:{type: Date},
        caigoudanwei: {type: String},
        waixingchicun: {type: String},
        linshihuoyongjiu: {type: String},
        paizhaohuohuika: {type: String},
        bizhong: {type: String},
        yuanbijine:{type: Number },
        shebeiyuanzhi: {type: Number},
        yitizhejiu: {type: Number},
        erjiduzhejiu: {type: Number},
        sanjiduzhejiu: {type: Number},
        yitizhejiu: {type: Number},
        yijidu: {type: Number}, 
        erjidu:{type: Number},
        leijizhejiu: {type: Number},
        qimojingzhi:  {type: Number}
})

mongoose.model('Entity', entity)

var E = mongoose.model('Entity')
var fs = require('fs')
var data =  fs.readFileSync('csv.json')
var iconv = require('iconv-lite')

var dataformats = JSON.parse(data)
console.log(dataformats)
dataformats.forEach(function(item){
        let e = new E()
        Object.keys(item).forEach(k=>{
                e[k] = item[k]
        })
        e.save()
})
