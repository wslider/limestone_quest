// global variables

let health 
let energy 
let money 
let strength
let xp // experience points 
let mushroomCoffee = 10 // gives you energy 

let mushroomCoffeeText = mushroomCoffee 

// characters

const jenny = {
id: "jenny",
name: "jenny",
class: "character",
species:  "dog",
inventory:["bone", "stick", "armor"],
health: 100,
strength: 75, 
money: 20
};

const little = {
id: "little",
name: "little",
class: "character",
species: "rabbit", 
inventory:["carrot", "herbs", "coin pouch"],
health: 100,
money: 100
};

const bob = {
id: "bob",
name: "bob",
class: "character",
species: "human", 
health: Infinity,
inventory:["magic maguffin", "empty wallet", "lucky penny"],
money: 0
};

const mushroomKing = {
id: "mushroomKing",
name: "mushroomKing",
class: "character",
species: "human", 
health: 50,
inventory:["magic mushrooms", "extra food", "mushroom coffee"],
money: 50 
}


//locations

const limestoneCanyon = {
id: "limestoneCanyon",
name: "limestoneCanyon",
class: "location",
hazards: ["goblins", "falling rocks", "extreme weather"],
prizes: ["magic mushrooms", "experience points"]
}

const limestoneCafe = {
id: "",
name: "",
class: "location",
hazards: [],
prizes: []
}

const fozberryFalls = {
id: "",
name: "",
class: "location",
hazards: ["falling water", "slippery rocks"],
prizes: ["medicinal moss", "rare coins"]
}

const abandonedMine = {
id: "",
name: "",
class: "location",
hazards: [],
prizes: ["money", "gems", "gold"] 
}

// magic lantern, coin pouch, old book 

function buyHealth (){
    health += 20;
    money -= 10;
    energy +=10; 
}

function drinkMushroomCoffee (){
    energy +=30;
    money -=10;
    health +=5; 
}

// experiental event listener .. go to cafe 

const goToCafe = document.getElementById('gameButton1');
const gameText = document.getElementById('gameText');
goToCafe.addEventListener('click', () => {gameText.textContent = 'Welcome to Limestone Cafe! Would you like some Mushroom Coffee?'}); 