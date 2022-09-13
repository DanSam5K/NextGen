/*
import { double, name } from "./app.js";

console.log(double(5));
console.log(name);

*/


import user, { printName, printJob } from "./app.js";

const UserName = new user("Robin-hood", "Student");
console.log(UserName);
printName(UserName);

printJob(UserName);