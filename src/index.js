module.exports = function solveEquation(equation) {
  const regexp = /[^\^]-? ?[0-9]+/g;
  let result = equation.match(regexp);  
  result = result.map(element => element.replace(/ /g, ''));
  const a = Number(result[0]),
        b = Number(result[1]),
        c = Number(result[2]);
  const x1 = Math.round((-1*b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a));
  const x2 = Math.round((-1*b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a));
  return (x1 < x2) ? [x1, x2] : [x2, x1];
}
