function add(num1, num2){
    return num1+num2;
}
add(2, 4);

(function(num1, num2){
    return num1+num2;
})();

((num1, num2)=>{
    return num1+num2;
})();

((num1, num2)=> num1+num2 )();



