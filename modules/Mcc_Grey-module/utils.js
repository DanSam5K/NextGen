/*
const name = "Dom";
function double(n) {
  return n * 2; //simply doubling a number
}

export { double, name };
*/

export default class User {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

export function printName(user) {
  console.log(`My name is ${user.name}`);
}

export function printJob(user) {
  console.log(`I am a ${user.job}`);
}
