const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Description of all dishes.');
})

.post((req,res,next) => {
    res.end("will add the dish" + req.body.name + 
        " with details " + req.body.description);
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('put opertaion not supported on /dishes');
})

.delete((req,res,next) => {
    res.end('Deleting of all dishes.');
});

dishRouter.route('/:dishId')
.get((req,res,next) => {
    res.end('Description of '+req.params.dishId +' dishes.');
})

.post((req,res,next) => {
    res.statusCode = 403;
    res.end('post opertaion not supported on /dishes');
})

.put((req,res,next) => {
    res.write("Updating the dish: "+ req.params.dishId+"\n");
    res.end("will update the dish : "+req.body.name+" with discription "+ req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting dish : '+ req.params.dishId);
});
module.exports = dishRouter;