var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(request,response){
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname,query = urlObj.query;
    var reg =/\.(TXT|JSON|HTML|CSS|JS|PNG|JPG|GIF|JPEG|SVG|ICON|ICO|MP3|OGG|WAV|MP4|WEBM|BMP)/i;
    if(reg.test(pathname)){
        try{
            var suffix = reg.exec(pathname)[1].toUpperCase();
            var suffixType = "text/plain";
            switch (suffix){
                case "TXT":
                    suffixType = "text/plain";
                    break;
                case "JSON":
                    suffixType = "application/json";
                    break;
                case "HTML":
                    suffixType = "text/html";
                    break;
                case "CSS":
                    suffixType = "text/css";
                    break;
                case "JS":
                    suffixType = "text/javascript";
                    break;
                case "PNG":
                    suffixType = "image/png";
                    break;
                case "JPG":
                    suffixType = "image/jpeg";
                    break;
                case "JPEG":
                    suffixType = "image/jpeg";
                    break;
                case "GIF":
                    suffixType = "image/gif";
                    break;
                case "BMP":
                    suffixType = " application/x-MS-bmp";
                    break;
                case "SVG":
                    suffixType = "image/svg+xml";
                    break;
                case "ICO":
                case "ICON":
                    suffixType = "image/x-icon";
                    break;
                case "MP3":
                    suffixType = "audio/mpeg";
                    break;
                case "OGG":
                    suffixType = "audio/ogg";
                    break;
                case "WAV":
                    suffixType = "audio/wav";
                    break;
                case "MP4":
                    suffixType = "video/mp4";
                    break;
                case "WEBM":
                    suffixType = "video/webm";
                    break;
                default:
                    suffixType = "text/plain";
            }
            var reg2 = /(HTML|CSS|JS|JSON)/i;
            var confile = null;
            if(reg2.test(suffix)){
                confile = fs.readFileSync("."+pathname,"utf8");
            }else{
                confile = fs.readFileSync("."+pathname);
            }
            response.writeHead(200,{"content-type":suffixType+";charset=utf-8"});
            response.end(confile);
            return;
        }catch (e){

        }

    }
    if(pathname =="/getData"){
        var res = fs.readFileSync("./json/data.json","utf8");
        res = JSON.parse(res);
        var pageCount = query.pageCount,pageNum = query.pageNum;

        var ary =[];
        var total = Math.ceil(res.length/pageCount);
        var min = (pageNum-1)*pageCount;
        var max = pageNum*pageCount-1;
        for(var i=min;i<=max;i++){
            var cur = res[i];
            if(i>res.length-1){
                break;
            }
            ary.push(cur);
        }
        response.writeHead(200,{"content-type":"application/json;charset=utf-8"});
        response.end(JSON.stringify({total:total,data:ary}));
        return;
    }
    response.writeHead(404);
    response.end();

})
server.listen("6553",function(){
    console.log("移动端")
})