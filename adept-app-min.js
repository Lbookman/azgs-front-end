/* NGDS Adept Server
   G. Hudman
  
*/

var  Path = 'C:\\Documents\\adept';
var  fs = require("fs");
console.log('Startup at ' + Date.now() + ' ' + Path);

const port = 80;
var express = require('express'),
    app = express(),
    request = require('request');

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});
 

app.use('/img', express.static('C:\\Documents\\adept\\windows-demo\\public\\img'));
app.use('/js', express.static('C:\\Documents\\adept\\windows-demo\\public\\js'));
app.use('/css', express.static('C:\\Documents\\adept\\windows-demo\\public\\css'));

app.get('/' , function(req,res) {
	 var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);

	 console.log('Remote IP ' + ip + ' ' + Path );
     res.sendFile('C:\\Documents\\adept\\windows-demo\\public\\adept-ssl.htm');
} );

app.listen(port, () => {
  console.log('App running on port ${port}.')
});

