var rect = require('./ractangle');

function solveRact(x,y){
    console.log("Solving Ractangle for l="+x+" and b="+y);
    if(x<0 || y<0){
        console.log("Shold be greater than 0");
    } else {
        console.log("Area : " + rect.area(x,y));
        console.log("Perimeter : " + rect.perimeter(x,y));
    }
}

solveRact(2,5);
solveRact(-1,4);