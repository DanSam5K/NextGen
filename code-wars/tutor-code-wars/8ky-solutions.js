// 1.  Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
  //declare an empty array
  let divisorArray = [];
  // loop through the array
  for (let i = 0; i < numbers.length; i++) {
    // if the number in the array%divisor ===0
    if (numbers[i] % divisor === 0) {
      // push the number into the my new array
      divisorArray.push(numbers[i]);
    }
  }
  return divisorArray;
}
