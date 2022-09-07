function getPower(decimalPlaces) {
  return 10 ** decimalPlaces;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

//  ES6 implemenmtation const capitalIze = (str) => str[0].toUpperCase() + str.slice(1);

function roundToDecimalPlaces(number, decimalPlaces = 4) {
  const power = getPower(decimalPlaces);
  return Math.round(number * power) / power;
}

export { capitalize, roundToDecimalPlaces };
