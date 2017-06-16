var http = require("http");
var https = require('https');
var iconv = require('iconv-lite');
var cheerio = require("cheerio");
var option = {
hostname: "mp.weixin.qq.com",
path: "/s/fM0r-YqjkFNDCip5e75QVA"
};
var REG_BODY = /<div[^>]*>([\s\S]*)<\/div>/;
var content = '<div>a5415</div>';
function getBody(content){
    var result = REG_BODY.exec(content);
    if(result && result.length === 2)
        return result[1];
    return content;
}

const stringAll = getBody(content)
const txt = "5";
console.log(stringAll,typeof(stringAll),'aaa',txt.indexOf('a5415'));

var req = https.request(option, function(res) {
res.on("data", function(chunk) {
	//const stringAll = getBody(iconv.decode(chunk,'utf-8'))
	//const txt = "炎炎夏日";
//console.log(stringAll,'bbb',txt.indexOf(stringAll));
});
}).on("error", function(e) {
console.log(e.message);
});
req.end();



