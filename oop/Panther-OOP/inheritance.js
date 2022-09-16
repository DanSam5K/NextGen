class Car{
    setName(name){
        this.name = name;
    }
    startEngine(){
        console.log('Engine started for '+this.name);
    }
    stopEngine(){
        console.log('Engine stopped for '+this.name);
    }
}
class Benz extends Car{
    topSpeed(speed){
        console.log('Top speed for '+this.name+' is '+speed)
    }
}
let myCar = new Benz();
myCar.setName('Jeep');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed('50 km/hr');