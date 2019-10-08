function isEven(x) {
    if(x%2 === 0) {
    console.log("true")
} else {
    console.log("false")
}
}

isEven(4);
isEven(7);
isEven(10);
isEven(80);
isEven(95);

function factorial(x) {
  if (x < 0) {
      return -1
  } else if (x == 0){
   return 1
  }else {

  return (x * factorial(x - 1))
      
  }
   
}

console.log(factorial(5));


