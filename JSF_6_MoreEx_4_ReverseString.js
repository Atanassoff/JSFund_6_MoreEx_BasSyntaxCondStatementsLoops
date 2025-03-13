function reverseString(str){
    let buff = "";
    str = String(str);
    for(let i = str.length - 1; i >= 0; i--){
        buff += `${str[i]}`;
    }
    console.log(buff);
}

reverseString("Hello")  //olleH
reverseString("SoftUni")//inUtfoS
reverseString(1234)   //4321