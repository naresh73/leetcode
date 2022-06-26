function fun(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let str2 = s.split('').reverse().join('');
    
    //conditional (ternary) operator-
    return str2 === s ? true : false ;

    // if (str2 === s){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}

let s = "A man, a plan, a canal: Panama";
console.log(fun(s));