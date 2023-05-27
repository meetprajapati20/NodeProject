const express = require('express');
const bodyParser = require('body-parser');

const leaders = express.Router();
leaders.use(bodyParser.json());
leaders.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("all details leaders.");
})
.post((req,res,next)=>{
    res.end("will add the dish" + req.body.name + 
        " with details " + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('put opertaion not supported on /dishes');
})
.delete((req,res,next)=>{
    res.end("Deleting leaders.");
});

leaders.route('/:leaderId')
.get((req,res,next)=>{
    res.end("Retriving details leader Id: "+req.params.leaderId);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('post opertaion not supported on /leader:prmotionId');
})
.put((req,res,next)=>{
    res.end("will add the leader" + req.body.name +
        " with details " + req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting leaders Id: " + req.params.leaderId);
});

module.exports = leaders;