// const doubler = (num) => {
//   console.log(num + num);
// };

// doubler(9);

// Recursion with doubler

// const doubler = (start) => {
//   console.log(start);
//   if (start < 10) {
//     doubler(start + 1);
//   }
// };

// doubler(1);

const fibonnaci = (num) => {
  if (num < 2) {
    return num;
  }
  return fibonnaci(num - 1) + fibonnaci(num - 2);
};

console.log(fibonnaci(7));
