function sortNumbers(a,b,c){
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    if(a > max){max = a;}
    if(a < min){min = a;}
    if(b > max){max = b;}
    if(b < min){min = b;}
    if(c > max){max = c;}
    if(c < min){min = c;}
    console.log(max);
    if(a === max && b === min){console.log(c);}
    else if(a === max && c === min){console.log(b);}
    else if(b === max && a === min){console.log(c);}
    else if(b === max && c === min){console.log(a);}
    else if(c === max && a === min){console.log(b);}
    else if(c === max && b === min){console.log(a);}
    console.log(min);
}

sortNumbers(2, 1, 3) 
//3 2 1
sortNumbers(-2, 1, 3) 
//3 1 -2
sortNumbers(0, 0, 2) 
//2 0 0