import user, { printName, printJob } from "./app.js";

const UserName = new user("Robin-hood", "Student");
console.log(UserName);
printName(UserName);

printJob(UserName);
  