const express = require('express');
const bodyParser = require('body-parser');

const dishItemRouter = express.Router();

dishItemRouter.use(bodyParser.json());

dishItemRouter.route('/')
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

module.exports = dishItemRouter;