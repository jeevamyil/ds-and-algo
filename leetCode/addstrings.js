addStrings = function (num1, num2) {
  sum = "";
  len1 = num1.length;
  len2 = num2.length;
  carry = 0;

  while (len1 > 0 || len2 > 0 || carry) {
    num1Digit = +num1.charAt(len1 - 1);
    num2Digit = +num2.charAt(len2 - 1);
    len1--;
    len2--;

    digitTotal = num1Digit + num2Digit + carry;
    carry = Math.floor(digitTotal / 10);
    digitToAppend = digitTotal % 10;
    sum = digitToAppend + sum;
    console.log(sum);
  }

  return sum;
};

console.log(addStrings("225", "11"));
