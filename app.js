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
