import { capitalize, roundToDecimalPlaces } from "./main.mjs";
import numberInClass from "./total.mjs";

function displayTotal(name, total) {
  return `${capitalize(name)}: your total cost is: ${roundToDecimalPlaces(
    total
  )}`;
}

const useCase = displayTotal("tobi", 20.44424424242);

console.log(useCase);
console.log(numberInClass(["tobi", "sam", "ben"]));

// export { displayTotal };
