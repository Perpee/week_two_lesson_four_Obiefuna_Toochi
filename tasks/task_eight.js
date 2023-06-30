function outerFunction(){
    const outerVar = 'i am from outside';
    
    function innerFunction(){
        console.log(outerVar);
    }
    
    innerFunction(); // inner function does not have access to the variable defined in the outer function
}










