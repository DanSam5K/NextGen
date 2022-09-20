class Animal{
    constructor(name){
    this.name = name
}
eats(){
    console.log(this.name+' eats food');
}
}
class Frog extends Animal{
    eats(){
        super.eats();
        console.log (this.name+' eats flies');
    }
}
let merlin = new Frog('Merlin');
merlin.eats();