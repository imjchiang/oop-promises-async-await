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
    this.intro = function()
    {
        console.log("Hi, I am a " + this.type + ".");
    }
}

let aPotato = new Potatoes("Coolest Potato", "Sweet Potato", 5, true);
console.log(aPotato);
console.log(aPotato.edible);
aPotato.intro();


//class
class Car
{
    constructor(year, make, model, color)
    {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive()
    {
        console.log("Vroom");
    }

    intro()
    {
        console.log("This car is a " + this.make + " " + this.model);
    }
}

let tesla = new Car(2020, "Tesla", "Model S", "red");
console.log(tesla);
tesla.drive();
tesla.intro();




class GithubProfile
{
    constructor(username, followers, url)
    {
        this.username = username;
        this.followers = followers;
        this.url = url;
    }

    intro()
    {
        console.log(`Hi, my github username is ${this.username}, and I have ${this.followers} follower(s). My github URL is ${this.url}.`)
    }
}

//https://api.github.com/users/imjchiang
fetch("https://api.github.com/users/imjchiang")
.then(response =>
{
    return response.json();
})
.then(data =>
{
    console.log(data);
    let githubURL = data.url;
    let githubUsername = data.login;
    let githubFollowers = data.followers;

    let josh = new GithubProfile(githubUsername, githubFollowers, githubURL);
    josh.intro();
})