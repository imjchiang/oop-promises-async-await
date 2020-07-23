//object oriented programming

const dog = 
{
    name: "Michael",
    goodBoy: true,
    gender: "boy",
};

const dogTwo = 
{
    name: "Rocco",
    color: "brown"
};

dogTwo.__proto__ = dog;

console.log(dog);

console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

//Make two objects and one object needs to inherit from the object.
const potato = 
{
    name: "Cool Potato",
    edible: true,
    internalColor: "yellow"
}

const sweetPotato =
{
    name: "Cooler Potato",
    internalColor: "purple",
    sweetness: 9000
}

sweetPotato.__proto__ = potato;

console.log(potato);
console.log(sweetPotato);

console.log(sweetPotato.name);
console.log(sweetPotato.internalColor);
console.log(sweetPotato.sweetness);

//Constructor Functions
function User(name) //function need to be caps
{
    //this
    this.name = name;

    //return this
}

let adam = new User("Adam");
console.log(adam.name);

function NBAPlayer(name, team, threePointShooter)
{
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer("Steph Curry", "Warriors", true);
console.log(steph);
console.log(steph.name);

function Potatoes(name, type, weight, edible)
{
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.edible = edible;
}

let aPotato = new Potatoes("Coolest Potato", "Sweet Potato", 5, true);
console.log(aPotato);
console.log(aPotato.edible);
