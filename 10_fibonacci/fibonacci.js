const fibonacci = function(num) {
  num = Number(num);
  if(num < 0){
    return "OOPS";
  } else if(num === 1 || num === 2){
    return 1;
  } else if(num === 0){
    return 0;
  }

  let fibo = 0;
  for(let i = 2; i < num; i++){
    fibo = (i - 1) + (i - 2);
  }
  return fibo;

}
// Do not edit below this line
module.exports = fibonacci;
