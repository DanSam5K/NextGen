import Client, {printName, printWear, printQuantity} from "./client.mjs";

const client = new Client('Bernard Chibuzor', 'Agbada', 3)
console.log(client)
printName(client)
printWear(client)
printQuantity(client)