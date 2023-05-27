const http = require("http");
const path = require("path");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res) => {
    // console.log(req.headers);
    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/html');
    // res.end('<html><body>Hii Meet</body></html>');
    console.log("Requested URL : "+req.url+" By Method : ",req.method);
    if (req.method == "GET"){
        var fileURL;
        if(req.url == "/") fileURL="/index.html";
        else fileURL = req.url;

        var filePATH = path.resolve('./public'+fileURL);
        const extFile = path.extname(filePATH);
        if (extFile == ".html"){
            fs.exists(filePATH,(exists)=> {
                if (!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type',"text/html");
                    res.end('<html><body>[ERROR] 404 File :'+fileURL+' Not Found at '+filePATH+'</body></html>');
                    return ;
                } 
                res.statusCode = 200;
                res.setHeader('Comtent-Type',"text/html");
                fs.createReadStream(filePATH).pipe(res);
            }) ;
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type',"text/html");
            res.end('<html><body>[ERROR] 404 File :'+fileURL+' Not HTML File</body></html>');
            return ; 
        }
    }
});

server.listen(port,hostname,() => {
    console.log(`server running at http://${hostname}:${port}`);
})