// global variables

let mushroomCoffee = 10 
let elevation = 5000
let health = 100
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

function buyHealth (money > 10){
    health += 20;
    money -= 10
}