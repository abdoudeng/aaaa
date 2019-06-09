var fs = require('fs')
var iconv = require('iconv-lite')
var s
var js = []
// var csv = fs.readFile('format.csv',{encoding:'gbk'}).toString().split('\n')
fs.readFile('format.csv',function(err,data){
    s =    iconv.decode(data,'gbk')
    var q= s.split('\n')
    console.log(q[2].split(','))
    q.forEach(item=>{
        item =  item.split(',')
        js.push({
        xuhao: item[0],
        shebeibianhao : item[1],
        shebeimingcheng:item[2],
        shebeileibie:item[3],
        xinghaoguige:item[4],
        nengli:item[5],
        gonglv: item[6],
        chuchangriqi: item[7],
        chuchangbianhao: item[8],
        shengchanchangjia: item[9],
        fadongjibianhao: item[10],
        dipanbianhao: item[11],
        zaiyonghaishixianzhi: item[12],
        jishuzhuangkuang: item[13],
        suozaidanwei: item[14],
        gengxinshijian: item[15],
        shoucijinchangshijian: item[16],
        caigoudanwei: item[18],
        waixingchicun: item[17],
        linshihuoyongjiu: item[19],
        paizhaohuohuika: item[20],
        bizhong: item[21],
        yuanbijine:item[22],
        shebeiyuanzhi: item[23],
        yitizhejiu: item[24],
        erjiduzhejiu: item[25],
        sanjiduzhejiu: item[26],
        yitizhejiu: item[27],
        yijidu: item[28],        
        erjidu:item[29],
        leijizhejiu: item[30],
        qimojingzhi: item[31] 
                })
        
    })
    console.log(js)
    var jsons = JSON.stringify(js)
    fs.writeFile('csv.json',jsons,function(err){
        console.log(err)
    })
})
// for(var i=0; i<csv.length; i++){
//     console.log(csv[i])
// }
// obj.push({
//     k1:csv[2].split(',')[1],
//     k2:csv[2].split(',')[2]
// })
// console.log(JSON.stringify(obj))