const express = require("express");
const morgan = require('morgan');
const http = require("http");
const bodyParser = require('body-parser');

const dishRouter = require("./routes/dishRouter"), promotions = require("./routes/promotions");
const leaders = require("./routes/leaders");
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter);
app.use('/promotions',promotions);
app.use('/leaders',leaders);

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
});