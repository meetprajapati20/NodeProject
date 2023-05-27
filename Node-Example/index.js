const ractangle = require('./ractangle');
var rect = require('./ractangle');

function solveRact(x,y){
    console.log("Solving Ractangle for l="+x+" and b="+y);
    // CH - 1
    // if(x<0 || y<0){
    //     console.log("Shold be greater than 0");
    // } else {
    //     console.log("Area : " + rect.area(x,y));
    //     console.log("Perimeter : " + rect.perimeter(x,y));
    // }
    // CH - 1
    // CH - 2
    rect(x,y,(err, ractangle) => {
        if(err){
            console.log("[ERROR] "+err.message);
        } else {
            console.log("Area : "+ractangle.area());
            console.log("Perimeter : "+ractangle.perimeter());
        }
    })
    console.log("After rect !!");
    // CH - 2

}

solveRact(2,5);
solveRact(-1,4);