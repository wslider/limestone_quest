const companions = {
    jenny: {
        id: "jenny",
        name: "Jenny",
        species: "Jack Russell Beagle Mix - Dog",
        inventory: ["bone", "stick", "armor"],
        health: 100,
        strength: 75,
        money: 20,
        dialogue: "",
        special: "combat" // Jenny boosts combat outcomes
    },
    little: {
        id: "little",
        name: "Little",
        species: "Lionhead Dwarf - Rabbit",
        inventory: ["carrot", "herbs", "coin pouch"],
        health: 100,
        strength: 20, 
        money: 100,
        dialogue: "",
        special: "healing"
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
        dialogue: "",
        bio: "Ever since he found the magic-maguffin in an abandoned mine, Bob realised he could manifest anything he needed in the moment. "
    },
    mushroomKing: {
        id: "mushroomKing",
        name: "Mushroom King",
        species: "human",
        inventory: ["magic mushrooms", "extra food", "mushroom coffee"],
        health: 50,
        money: 50,
        location: "",
        dialogue: "",
        bio:""
    }
};