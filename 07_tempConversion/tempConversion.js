const ftoc = function(f) {
  //c=(f-32)*(5/9)
  let c = (f - 32) * (5 / 9)
  return c % 1 == 0 ? c : parseFloat(c.toFixed(1));
};

const ctof = function(c) {
  //f=c*(5/9)+32
  let f = c * (9 / 5) + 32;
  return f % 1 == 0 ? f : parseFloat(f.toFixed(1));
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
