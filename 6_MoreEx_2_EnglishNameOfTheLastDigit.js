function englNameOfLastDigit(n){
    let digit = n % 10;
    let name = "";
    switch(digit){
        case 1: name = "one"; break;
        case 2: name = "two"; break;
        case 3: name = "three"; break;
        case 4: name = "four"; break;
        case 5: name = "five"; break;
        case 6: name = "six"; break;
        case 7: name = "seven"; break;
        case 8: name = "eight"; break;
        case 9: name = "nine"; break;
        case 0: name = "zero"; break;
        default: break;
    }
    console.log(name);
}

englNameOfLastDigit(512) 
//two
englNameOfLastDigit(1) 
//one
englNameOfLastDigit(1643) 
//three