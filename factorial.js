//finding the factorial of a number using an if statement

function factorialNumber(num){
    if (num <0){
        return -1;
    }
    else if (num==0){
        return 1;
    }
    else{
        return (num*factorialNumber(num-1));
    }
}
factorialNumber(5);


//Using a ForLoop

function firstFactorial (num){

    if (num==0 || num ==1)
        return 1;
    for (var i = num-1; i >=1; i-- ){
        num = num * i;
    }
    return num;
}

firstFactorial(5);


