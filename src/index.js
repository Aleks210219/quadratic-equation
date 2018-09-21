module.exports = function solveEquation(equation) {
  // your implementation
  var arr = equation.split(' ');
  var a = arr[0];
  var b = arr[3] + arr[4];
  var c = arr[7] + arr[8];
  var D = b * b - 4 * a * c;
  var endArr = [];
  if (D > 0) {
  	endArr.push(Math.round(((-b) + Math.sqrt(D)) / (2 * a)));
  	endArr.push(Math.round(((-b) - Math.sqrt(D)) / (2 * a)));
  }

endArr.sort(function(a, b) { return a - b; });
return endArr;
}
