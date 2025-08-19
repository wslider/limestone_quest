// Player and companion state
let player = {
    health: 100,
    energy: 50,
    money: 0,
    strength: 10,
    xp: 10,
    level: 1,
    mushroomCoffee: 10,
    inventory: []
};

// Companions (Jenny and Little travel with the player)
const companions = {
    jenny: {
        id: "jenny",
        name: "Jenny",
        species: "Jack Russell Beagle Mix",
        inventory: ["bone", "stick", "armor"],
        health: 100,
        strength: 75,
        money: 20,
        dialogue: "Woof! Let’s sniff out some adventure!",
        special: "combat" // Jenny boosts combat outcomes
    },
    little: {
        id: "little",
        name: "Little",
        species: "Lionhead Dwarf Rabbit",
        inventory: ["carrot", "herbs", "coin pouch"],
        health: 100,
        money: 100,
        dialogue: "Hop! I’ll find us some herbs to stay safe.",
        special: "healing" // Little mitigates health loss
    }
};

// Other characters (e.g., Bob, Mushroom King)
const characters = {
    bob: {
        id: "bob",
        name: "Bob",
        species: "human",
        inventory: ["magic maguffin", "empty wallet", "lucky penny"],
        health: Infinity,
        money: 0,
        location: "cafe",
        dialogue: "Hey, my magic maguffin could help you... for a price."
    },
    mushroomKing: {
        id: "mushroomKing",
        name: "Mushroom King",
        species: "human",
        inventory: ["magic mushrooms", "extra food", "mushroom coffee"],
        health: 50,
        money: 50,
        location: "mushroomForest",
        dialogue: "Bow to the Mushroom King!"
    }
};

// DOM elements
const button1 = document.querySelector('#gameButton1');
const button2 = document.querySelector('#gameButton2');
const button3 = document.querySelector('#gameButton3');
const button4 = document.querySelector('#gameButton4');
const button5 = document.querySelector('#gameButton5');
const gameText = document.querySelector('#gameText');
const levelText = document.querySelector('#levelText');
const healthText = document.querySelector('#healthText');
const xpText = document.querySelector('#xpText');
const moneyText = document.querySelector('#moneyText');
const mushroomCoffeeText = document.querySelector('#mushroomCoffeeText');
const companionInfo = document.querySelector('#companionInfo'); // New panel

// Locations
const locations = {
    trailhead: {
        name: "Limestone Canyon Trailhead",
        buttons: [
            { text: '<i class="fas fa-coffee"></i> Go to Cafe', action: () => changeLocation('cafe') },
            { text: '<i class="fas fa-mountain"></i> Enter Canyon', action: () => changeLocation('canyon') },
            { text: '<i class="fas fa-store"></i> Go to Store', action: () => changeLocation('townSquare') },
            { text: '<i class="fas fa-eye"></i> Look Around', action: lookAround }
        ],
        text: "You, Jenny, and Little stand at the Limestone Canyon Trailhead. Jenny sniffs the air, while Little nibbles a carrot.",
        image: "limestoneCanyonNightCafeLitPath.jpg"
    },
    cafe: {
        name: "Limestone Cafe",
        buttons: [
            { text: '<i class="fas fa-mug-hot"></i> Drink Coffee', action: drinkMushroomCoffee },
            { text: '<i class="fas fa-comment"></i> Talk to Bob', action: () => interactWithCharacter('bob') },
            { text: '<i class="fas fa-music"></i> Enjoy the Vibe', action: cafeVibe },
            { text: '<i class="fas fa-door-open"></i> Return to Trailhead', action: () => changeLocation('trailhead') }
        ],
        text: "You, Jenny, and Little enter the cozy Limestone Cafe. Bob lounges in the corner. Jenny wags her tail, and Little hops curiously.",
        image: "limestoneCafe.jpg"
    },
    // ... (other locations remain similar, updated with companion context)
    canyon: {
        name: "Limestone Canyon",
        buttons: [
            { text: '<i class="fas fa-water"></i> Fozberry Falls Trail', action: () => changeLocation('fozberryFalls') },
            { text: '<i class="fas fa-stream"></i> Whispering Stream Trail', action: () => changeLocation('whisperingStream') },
            { text: '<i class="fas fa-dungeon"></i> Deep Canyon Trail', action: () => changeLocation('deepCanyon') },
            { text: '<i class="fas fa-door-open"></i> Leave Canyon', action: () => changeLocation('trailhead') }
        ],
        text: "You, Jenny, and Little venture into Limestone Canyon. Jenny growls at shadows, while Little stays close.",
        image: "limestoneCanyon.jpg"
    },
    townSquare: {
        name: "Town Square",
        buttons: [
            { text: '<i class="fas fa-shopping-basket"></i> Visit Market', action: visitMarket },
            { text: '<i class="fas fa-medkit"></i> Buy Health', action: buyHealth },
            { text: '<i class="fas fa-bone"></i> Play with Jenny', action: () => interactWithCompanion('jenny') },
            { text: '<i class="fas fa-door-open"></i> Return to Trailhead', action: () => changeLocation('trailhead') }
        ],
        text: "You, Jenny, and Little arrive at the bustling Town Square. Jenny chases her tail, and Little eyes a vegetable stall.",
        image: "townSquare.jpg"
    },
    fozberryFalls: {
        name: "Fozberry Falls Trail",
        buttons: [
            { text: '<i class="fas fa-search"></i> Explore Falls', action: exploreFalls },
            { text: '<i class="fas fa-carrot"></i> Little’s Search', action: () => interactWithCompanion('little') },
            { text: '<i class="fas fa-door-open"></i> Return to Canyon', action: () => changeLocation('canyon') }
        ],
        text: "The Fozberry Falls roar. Jenny bounds near the water, while Little cautiously sniffs for herbs.",
        image: "fozberryFalls.jpg"
    },
    whisperingStream: {
        name: "Whispering Stream Trail",
        buttons: [
            { text: '<i class="fas fa-leaf"></i> Follow Stream', action: followStream },
            { text: '<i class="fas fa-carrot"></i> Little’s Search', action: () => interactWithCompanion('little') },
            { text: '<i class="fas fa-door-open"></i> Return to Canyon', action: () => changeLocation('canyon') }
        ],
        text: "The Whispering Stream flows gently. Jenny splashes playfully, and Little hunts for herbs.",
        image: "whisperingStream.jpg"
    },
    deepCanyon: {
        name: "Deep Canyon Trail",
        buttons: [
            { text: '<i class="fas fa-tree"></i> Mushroom Forest', action: () => changeLocation('mushroomForest') },
            { text: '<i class="fas fa-gem"></i> Deep Mines', action: () => changeLocation('deepMines') },
            { text: '<i class="fas fa-skull"></i> Pit of Despair', action: () => changeLocation('pitOfDespair') },
            { text: '<i class="fas fa-door-open"></i> Leave Deep Canyon', action: () => changeLocation('canyon') }
        ],
        text: "The Deep Canyon is dark. Jenny growls protectively, and Little’s ears twitch nervously.",
        image: "deepCanyon.jpg"
    },
    mushroomForest: {
        name: "Mushroom Forest",
        buttons: [
            { text: '<i class="fas fa-mushroom"></i> Collect Mushrooms', action: collectMushrooms },
            { text: '<i class="fas fa-crown"></i> Confront Mushroom King', action: () => interactWithCharacter('mushroomKing') },
            { text: '<i class="fas fa-bone"></i> Jenny’s Hunt', action: () => interactWithCompanion('jenny') },
            { text: '<i class="fas fa-door-open"></i> Return to Deep Canyon', action: () => changeLocation('deepCanyon') }
        ],
        text: "The Mushroom Forest glows. Jenny sniffs for trouble, while Little nibbles a mushroom.",
        image: "mushroomForest.jpg"
    },
    deepMines: {
        name: "Deep Mines",
        buttons: [
            { text: '<i class="fas fa-pickaxe"></i> Mine Resources', action: mineResources },
            { text: '<i class="fas fa-door-open"></i> Return to Deep Canyon', action: () => changeLocation('deepCanyon') }
        ],
        text: "The Deep Mines are rich with gems. Jenny guards you, and Little stays alert.",
        image: "deepMines.jpg"
    },
    pitOfDespair: {
        name: "Pit of Despair",
        buttons: [
            { text: '<i class="fas fa-search"></i> Investigate Pit', action: investigatePit },
            { text: '<i class="fas fa-door-open"></i> Return to Deep Canyon', action: () => changeLocation('deepCanyon') }
        ],
        text: "The Pit of Despair is eerie. Jenny stands firm, and Little trembles but stays close.",
        image: "pitOfDespair.jpg"
    }
};

// Time machine button
const timeMachineButton = {
    text: '<i class="fas fa-clock"></i> Use Time Machine',
    action: useTimeMachine
};

// Current location
let currentLocation = 'trailhead';

// Update game state in UI
function updateGameState() {
    healthText.textContent = player.health;
    xpText.textContent = player.xp;
    moneyText.textContent = player.money;
    mushroomCoffeeText.textContent = player.mushroomCoffee;
    levelText.textContent = player.level;
    document.querySelector('#inventoryText').textContent = player.inventory.join(', ') || 'Empty';
    // Update companion info
    if (companionInfo) {
        document.querySelector('#jennyHealth').textContent = companions.jenny.health;
        document.querySelector('#littleHealth').textContent = companions.little.health;
        document.querySelector('#jennyInventory').textContent = companions.jenny.inventory.join(', ');
        document.querySelector('#littleInventory').textContent = companions.little.inventory.join(', ');
    }
    ['health', 'xp', 'money', 'mushroomCoffee', 'level'].forEach(stat => {
        const element = document.querySelector(`#${stat}Text`);
        if (element.textContent != player[stat]) {
            element.classList.add('stat-changed');
            setTimeout(() => element.classList.remove('stat-changed'), 500);
        }
    });
}

// Change location and update buttons
function changeLocation(locationKey) {
    if (!locations[locationKey]) {
        gameText.innerHTML = "Error: Location not found!";
        return;
    }
    currentLocation = locationKey;
    const location = locations[locationKey];

    // Update buttons
    button1.innerHTML = location.buttons[0]?.text || '';
    button1.onclick = location.buttons[0]?.action || (() => {});
    button1.style.display = location.buttons[0] ? 'block' : 'none';
    button2.innerHTML = location.buttons[1]?.text || '';
    button2.onclick = location.buttons[1]?.action || (() => {});
    button2.style.display = location.buttons[1] ? 'block' : 'none';
    button3.innerHTML = location.buttons[2]?.text || '';
    button3.onclick = location.buttons[2]?.action || (() => {});
    button3.style.display = location.buttons[2] ? 'block' : 'none';
    button4.innerHTML = location.buttons[3]?.text || '';
    button4.onclick = location.buttons[3]?.action || (() => {});
    button4.style.display = location.buttons[3] ? 'block' : 'none';
    button5.innerHTML = timeMachineButton.text;
    button5.onclick = timeMachineButton.action;

    // Update game text and image
    gameText.innerHTML = location.text;
    document.querySelector('#gameImage').src = location.image || 'limestoneCanyonNightCafeLitPath.jpg';
    updateGameState();
    checkGameOver();
}

// Interact with companions
function interactWithCompanion(companionId) {
    const companion = companions[companionId];
    gameText.innerHTML = companion.dialogue;
    if (companionId === 'jenny') {
        if (Math.random() < 0.6) {
            player.xp += 10;
            companions.jenny.inventory.push('treasure');
            gameText.innerHTML += " Jenny digs up a hidden treasure, gaining 10 XP!";
        } else {
            companions.jenny.health -= 10;
            gameText.innerHTML += " Jenny gets scratched chasing a critter!";
        }
    } else if (companionId === 'little') {
        if (Math.random() < 0.7) {
            player.health += 10;
            companions.little.inventory.push('herbs');
            gameText.innerHTML += " Little finds healing herbs, restoring 10 health!";
        } else {
            companions.little.health -= 5;
            gameText.innerHTML += " Little nibbles a bad herb!";
        }
    }
    updateGameState();
}

// Interact with other characters
function interactWithCharacter(characterId) {
    const character = characters[characterId];
    if (!character) {
        gameText.innerHTML = "Error: Character not found!";
        return;
    }
    gameText.classList.add('character-interaction');
    setTimeout(() => gameText.classList.remove('character-interaction'), 1000);
    switch (characterId) {
        case 'bob':
            if (player.money >= 20) {
                player.money -= 20;
                player.xp += 15;
                gameText.innerHTML = `${character.dialogue} You buy a tip about the canyon, gaining 15 XP!`;
            } else {
                gameText.innerHTML = "You don't have enough coins to deal with Bob!";
            }
            break;
        case 'mushroomKing':
            if (Math.random() < 0.5 && player.strength + companions.jenny.strength < character.strength) {
                player.health -= 15;
                companions.jenny.health -= 10;
                gameText.innerHTML = `${character.dialogue} The Mushroom King attacks! You and Jenny lose health.`;
            } else {
                player.mushroomCoffee += 2;
                player.inventory.push('magic mushrooms');
                gameText.innerHTML = `With Jenny's help, you impress ${character.name}! He gives you magic mushrooms and 2 Mushroom Coffee.`;
            }
            break;
    }
    updateGameState();
    checkLevelUp();
}

// Action functions
function drinkMushroomCoffee() {
    if (player.money >= 10 && player.mushroomCoffee > 0) {
        player.energy += 30;
        player.health += 5;
        player.mushroomCoffee -= 1;
        gameText.innerHTML = "You drink Mushroom Coffee, boosting your energy and health! Little hops excitedly.";
    } else {
        gameText.innerHTML = "Not enough money or coffee! Jenny whines.";
    }
    updateGameState();
}

function buyHealth() {
    if (player.money >= 10) {
        player.health += 20;
        player.energy += 10;
        companions.little.health += 10; // Little benefits too
        gameText.innerHTML = "You buy a health potion! Little feels better too.";
    } else {
        gameText.innerHTML = "Not enough money! Jenny barks in frustration.";
    }
    updateGameState();
}

function cafeVibe() {
    player.energy += 5;
    companions.jenny.health += 5;
    companions.little.health += 5;
    gameText.innerHTML = "You, Jenny, and Little relax in the cozy cafe, feeling refreshed.";
    updateGameState();
}

function lookAround() {
    gameText.innerHTML = `You survey the trailhead. Jenny sniffs eagerly, and Little’s ears twitch. ${companions.jenny.dialogue}`;
    updateGameState();
}

function visitMarket() {
    player.money += 20;
    if (Math.random() < 0.5) {
        companions.jenny.inventory.push('treat');
        gameText.innerHTML = "You haggle at the market and earn coins! Jenny finds a treat.";
    } else {
        gameText.innerHTML = "You haggle at the market and earn coins! Little nibbles a carrot.";
    }
    updateGameState();
}

function exploreFalls() {
    if (Math.random() < 0.3 && companions.little.special !== 'healing') {
        player.health -= 10;
        companions.jenny.health -= 5;
        gameText.innerHTML = "You and Jenny slip on wet rocks! Little couldn’t help.";
    } else {
        player.xp += 15;
        player.inventory.push('medicinal moss');
        gameText.innerHTML = "Little’s herbs prevent a slip! You find medicinal moss and gain XP.";
    }
    updateGameState();
}

function followStream() {
    player.xp += 10;
    player.inventory.push('herbs');
    companions.little.inventory.push('herbs');
    gameText.innerHTML = "You and Little follow the stream, finding rare herbs. Little hops happily.";
    updateGameState();
}

function collectMushrooms() {
    if (Math.random() < 0.2 && companions.jenny.special !== 'combat') {
        player.health -= 15;
        companions.little.health -= 5;
        gameText.innerHTML = "A fungal trap snares you and Little! Jenny couldn’t protect you.";
    } else {
        player.mushroomCoffee += 2;
        player.inventory.push('magic mushrooms');
        gameText.innerHTML = "Jenny guards you as you collect magic mushrooms! Little nibbles one.";
    }
    updateGameState();
}

function mineResources() {
    if (Math.random() < 0.3) {
        player.health -= 20;
        companions.jenny.health -= 10;
        gameText.innerHTML = "A tunnel collapses, injuring you and Jenny! Little scurries to safety.";
    } else {
        player.money += 30;
        player.inventory.push('gems');
        gameText.innerHTML = "You mine gems with Jenny’s help! Little watches nervously.";
    }
    updateGameState();
}

function investigatePit() {
    if (Math.random() < 0.5 && companions.little.special !== 'healing') {
        player.health -= 30;
        companions.little.health -= 10;
        gameText.innerHTML = "The pit’s darkness overwhelms you and Little! Jenny barks in alarm.";
    } else {
        player.xp += 20;
        player.inventory.push('old book');
        gameText.innerHTML = "Little’s caution guides you to an ancient book! Jenny stands guard.";
    }
    updateGameState();
}

function useTimeMachine() {
    if (player.energy >= 20) {
        player.energy -= 20;
        companions.jenny.health = 100; // Reset companion health
        companions.little.health = 100;
        gameText.innerHTML = "You use the Time Machine, resetting to the Trailhead! Jenny and Little are refreshed.";
        changeLocation('trailhead');
    } else {
        gameText.innerHTML = "Not enough energy! Jenny whines, and Little twitches nervously.";
    }
    updateGameState();
}

function checkLevelUp() {
    if (player.xp >= player.level * 100) {
        player.level += 1;
        player.strength += 5;
        gameText.innerHTML = `You leveled up to Level ${player.level}! Strength increased. Jenny barks proudly!`;
        updateGameState();
    }
}

function checkGameOver() {
    if (player.health <= 0 || companions.jenny.health <= 0 || companions.little.health <= 0) {
        gameText.innerHTML = "Game Over! You or your companions ran out of health.";
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
        button5.disabled = true;
    }
}

// Initialize game
changeLocation(currentLocation);