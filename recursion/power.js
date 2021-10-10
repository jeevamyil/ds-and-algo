const powerf = (base, power) => {
  let result = 0;
  
  if (power === 0) {
    return 1;
  }

  result = base * powerf(base, power - 1);

  return result;
};

console.log(powerf(2, 3));
