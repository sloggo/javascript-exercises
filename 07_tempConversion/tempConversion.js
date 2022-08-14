const ftoc = function(f) {
  return (Math.round(((f-32) * (5/9)) * 10) / 10)
};

const ctof = function(c) {
  const f = (c * (1.8)) + 32
  console.log(f)
  return (Math.round( f * 10) / 10)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
