const express = require("express");
const morgan = require('morgan');
const http = require("http");
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes',(req,res,next) => {
    res.end('Description of all dishes.');
});

app.post('/dishes',(req,res,next) => {
    res.end("will add the dish" + req.body.name + 
        " with details " + req.body.description);
});

app.put('/dishes',(req,res,next) => {
    res.statusCode = 403;
    res.end('put opertaion not supported on /dishes');
});

app.delete('/dishes',(req,res,next) => {
    res.end('Deleting of all dishes.');
});

// dishId

app.get('/dishes/:dishId',(req,res,next) => {
    res.end('Description of '+req.params.dishId +' dishes.');
});

app.post('/dishes/:dishId',(req,res,next) => {
    res.statusCode = 403;
    res.end('post opertaion not supported on /dishes');
});

app.put('/dishes/:dishId',(req,res,next) => {
    res.write("Updating the dish: "+ req.params.dishId+"\n");
    res.end("will update the dish : "+req.body.name+" with discription "+ req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next) => {
    res.end('Deleting dish : '+ req.params.dishId);
});

app.use(express.static(__dirname+'/public'));

app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type",'text/html');
    res.end('<html><body>This is an Express Server</body></html>')
});

const server = http.createServer(app);
server.listen(port, hostname, ()=> {
    console.log(`Server Running On http://${hostname}:${port}`);
})