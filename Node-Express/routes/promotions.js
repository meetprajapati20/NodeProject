const express = require('express');
const bodyParser = require('body-parser');

const promotions = express.Router();
promotions.use(bodyParser.json());
promotions.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("all details Promotions.");
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
    res.end("Deleting Promotions.");
});

promotions.route('/:promotionId')
.get((req,res,next)=>{
    res.end("Retriving details Promotion Id: "+req.params.promotionId);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('post opertaion not supported on /promotion:prmotionId');
})
.put((req,res,next)=>{
    res.end("will add the promotion" + req.body.name +
        " with details " + req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting Promotions Id: " + req.params.promotionId);
});

module.exports = promotions;
