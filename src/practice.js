let a = 2;
let b = 2;
let c = 3;

function isTriangle(a, b, c) {
  let number = Math.max(a, b, c);
  if (number < a + b) return true;
  else return false;
}

isTriangle(a, b, c);
