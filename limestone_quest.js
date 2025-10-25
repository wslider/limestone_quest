// Global variables
let health = 100;
let energy = 0;
let money = 0;
let strength = 0;
let xp = 10;
let mushroomCoffee = 10;
let currentLocationIndex = 0; // Track current location

const hour = new Date().getHours();
const gameTextTextArea = document.getElementById('gameTextTextArea');
const gameImage = document.getElementById('gameImage');
const button1 = document.querySelector('#gameButton1');
const button2 = document.querySelector('#gameButton2');
const button3 = document.querySelector('#gameButton3');
const button4 = document.querySelector('#gameButton4'); 
const button5 = document.querySelector('#gameButton5');

document.addEventListener('DOMContentLoaded', () => {
  function customGreeting() {
    if (!gameTextTextArea) {
      console.error("Text area with ID 'gameTextTextArea' not found.");
      return;
    }
    
    let greeting;
    if (hour >= 6 && hour < 12) {
      greeting = "Welcome to Limestone Quest. Go to Limestone Cafe and grab some Mushroom Coffee.";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Welcome to Limestone Quest. Why not take the trail into Limestone Canyon?";
    } else if (hour >= 17 && hour < 20) {
      greeting = "Welcome to Limestone Quest";
    } else {
      greeting = "It's getting dark out there. Watch out for goblins.";
    }
    gameTextTextArea.value = greeting;
    console.log("Textarea value set to:", gameTextTextArea.value);
  }

  // Initial setup
  console.log("Initializing game...");
  customGreeting();
  setInterval(customGreeting, 60000); // Update every minute

  // Locations 
  const locations = [
    {
      id: 0,
      name: "Trailhead",
      "button text": ["Go to Cafe", "Go to Canyon", "Go to Fozberry Falls", "Go To Canyonview Tower", "Look Around"],
      "button functions": [() => updateLocation(locations[1]), () => updateLocation(locations[2]), ()=> updateLocation(locations[3]), ()=> updateLocation(locations[0]), lookAround],
      "hazards": [],
      "prizes": [],
      text: "Welcome to the Trailhead. The Start of Your Adventures",
      locationImage: 'images/limestoneCanyonNightCafeLitPath.jpg', 
      lookAroundText: "You look around and see the canyon rim above, a lit path to the cafe, and a quiet night settling in."
    },
    {
      id: 1,
      name: "Limestone Cafe",
      "button text": ["Go Back", "Drink Coffee", "Go to Canyon", "Look Around", "Talk to Bob"],
      "button functions": [() => updateLocation(locations[0]), drinkMushroomCoffee, () => updateLocation(locations[2]), lookAround, lookAround],
      "hazards": [],
      "prizes": [],
      text: "Welcome to Limestone Cafe. Would you like some Mushroom Coffee?",
      locationImage: 'images/limestoneCafe.jpg',
      lookAroundText: "You look around and see a mostly empty cafe, steaming cups of mushroom coffee, and a suspicious-looking book on the table near the fireplace."
    },
    {
      id: 2,
      name: "Limestone Canyon",
      "button text": ["Go Back", "Deep Canyon Trail", "Fozberry Falls Trail", "Enter Abandoned Mine", "Use Time Machine"],
      "button functions": [() => updateLocation(locations[0]), () => updateLocation(locations[4]), () => updateLocation(locations[3]), lookAround, useTimeMachine],
      "hazards": [],
      "prizes": [],
      text: "Welcome to Limestone Canyon. You see signs for trails and warnings about hazards, but the trail ahead looks fine.",
      locationImage: 'images/limestoneCanyon.jpg',
      lookAroundText: "You look around and see towering canyon walls, a narrow trail, and distant echoes of water."
    },
    {
      id:3,
      name: "Fozberry Falls",
      "button text": ["Go Back", "Go To Limestone Canyon", "Whispering Stream", "Look Around", "Use Time Machine"],
      "button functions": [() => updateLocation(locations[0]), ()=> updateLocation(locations[2]), lookAround, lookAround, useTimeMachine],
      "hazards": [],
      "prizes": [],
      text: "Welcome to Fozberry Falls",
      locationImage: 'images/fozberryFalls.jpg',
      lookAroundText: "Fozberry Falls roar and spay mist high into the air. Watch out for slippery moss and poisonous salimanders!"
    },
    { id: 4,
      name: "Deep Canyon",
      "button text": ["Go Back", "Enter Crystal Cave", "Enter Mushroom Forest", "Look Around", "Use Time Machine"],
      "button functions": [() => updateLocation(locations[2]),  lookAround, lookAround, lookAround, useTimeMachine],
      "hazards": [],
      "prizes": [],
      text: "Welcome to the Deep Canyon and its dark depths. Few make it this far and even fewer return to tell the tale.",
      locationImage: 'images/limestoneDeepCanyonTrail.jpg',
      lookAroundText:""
    }
 
  ];

  // Functions
  function updateLocation(location) {
    console.log("Updating location to:", location.name);
    currentLocationIndex = locations.indexOf(location); // Track current location index
    if (!gameImage || !button1 || !button2 || !button3 || !button4 || !button5) {
      console.error("One or more DOM elements not found:", { gameImage, button1, button2, button3, button4, button5 });
      return;
    }
    gameImage.src = location.locationImage;
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button5.innerText = location["button text"][4];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    button5.onclick = location["button functions"][4];
    if (location.name === "Start") {
      customGreeting();
    } else {
      gameTextTextArea.value = location.text;
    }
    console.log("Buttons assigned, text set to:", gameTextTextArea.value);
  }

  function drinkMushroomCoffee() {
    energy += 30;
    money -= 10;
    health += 5;
    gameTextTextArea.value = "You drank Mushroom Coffee! Energy +30, Health +5, Money -10.";
    updateStats();
    console.log("Stats updated:", { health, energy, money });
  }

  function useTimeMachine() {
    gameTextTextArea.value = "You use the Time Machine!";
    updateLocation(locations[0]);
  }

  function updateStats() {
    document.getElementById('healthText').textContent = health;
    document.getElementById('xpText').textContent = xp;
    document.getElementById('moneyText').textContent = money;
    document.getElementById('mushroomCoffeeText').textContent = mushroomCoffee;
  }

    function useMagicMaguffin () {

    }


  // Placeholder functions
  function goToTown() {
    gameTextTextArea.value = "You head to Town!";
    console.log("Going to Town");
  }

  function lookAround() {
    gameTextTextArea.value = locations[currentLocationIndex].lookAroundText || "You look around and see nothing unusual.";
    console.log("Looking around at location:", locations[currentLocationIndex].name);
  }

  function goToDeepCanyon() {
    gameTextTextArea.value = "You start down the Deep Canyon Trail!";
    console.log("Going to Deep Canyon");
  }

  function goToFozberryFalls() {
    gameTextTextArea.value = "You head toward Fozberry Falls!";
    console.log("Going to Fozberry Falls");
  }

  // Initial location
  console.log("Setting initial location...");
  updateLocation(locations[0]);
});

/* use concepts

.map()  - 
.some() - weapons 

*/