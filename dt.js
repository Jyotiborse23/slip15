var http=require('http');
var date=require('./modules.js');
http.createServer(function(req,res){
    res.write("the current date and time:"+ date.myDateTime());
    res.end();
}).listen(8080);