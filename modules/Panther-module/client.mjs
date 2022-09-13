export default class Client{
    constructor(name, wear, quantity){
        this.name = name
        this.wear = wear
        this.quantity = quantity
    }
}

export function printName(client) {
    console.log(`Client's name is ${client.name}`)
}

export function printWear(client) {
    console.log(`Client wants to sew ${client.wear}`)
}
export function printQuantity(client){
    console.log(`The client wants ${client.quantity} ${client.wear}`)
}