//inbuild function Math.sqrt()...
//console.log(Math.sqrt(4));

function sqr(x){
    let i = 0;
    while ( i*i <= x){
        i += 1;
    } 
    return i-1;
}

let x = 8 ;
console.log(sqr(x));
// console.log(Math.sqrt(x));