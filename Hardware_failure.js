function convert(T,t,n,x){
  var k = 1;
  while (Math.pow((x/100), k)> 0.01) {
    k++ 
  }
  k = k * n / Math.floor((T/t));
  return k;
}
module.exports = convert;








