// global variables

let health 
let energy 
let money 
let strength
let xp 
let mushroomCoffee = 10 // gives you energy 

let mushroomCoffeeText = mushroomCoffee 

const button1 = document.querySelector('#gameButton1');
const button2 = document.querySelector('#gameButton2');
const button3 = document.querySelector('#gameButton3');
const button4 = document.querySelector('#gameButton4');

const gameText = document.getElementById('gameText');

// initialize buttons
button1.onclick = goToCafe;
button2.onclick = enterCanyon;
button3.onclick = goToStore;
button4.onclick = useTimeMachine; 

//canyon = fozberry falls trail, whispering stream trail, deep canyon trail, leave canyon
    // deep canyon trail = mushroom forest, deep mines, pit of despair
//cafe = drink coffee, ask question, play game, leave cafe

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

// locations 

const locations = [
  {
    name: "Limestone Cafe",
    "button text": ["Drink Coffee", "Ask Question", "Enjoy the Vibe", "Go to Canyon", "Go To Town"],
    "button functions": [mushroomCoffee, askQuestion, cafeVibe, goToCanyon, goToTown],
    "hazards": [], 
    "prizes": [],
    text: "Welcome to Limestone Cafe. Would you like some Mushroom Coffee?"
  },
  {name: "",
    "button text": ["Drink Coffee", "Ask Question", "Enjoy the Vibe", "Go to Canyon", "Go To Town"],
    "button functions": [mushroomCoffee, askQuestion, cafeVibe, goToCanyon, goToTown],
    "hazards": [], 
    "prizes": [],
    text: 
  }
]


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




function goToCafe(){

d.textContent = "Drink Coffee"; 
askQuestionButton.textContent = "Ask Question";
playGameButton.textContent = "Play Game"; 
leaveCafeButton.textContent = "Leave Cafe"; 

}

goToCafe.addEventListener('click', () => {
    goToCafe();
    gameText.textContent = 'Welcome to Limestone Cafe! Would you like some Mushroom Coffee?';
});
