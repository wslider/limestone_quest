// Global variables
    let health = 100;
    let energy = 0;
    let money = 0;
    let strength = 0;
    let xp = 10;
    let mushroomCoffee = 10;

    const hour = new Date().getHours();
    const gameTextTextArea = document.getElementById('gameTextTextArea');
    const gameImage = document.getElementById('gameImage')
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
        
        if (hour >= 6 && hour < 12) {
          gameTextTextArea.value = "Good Morning. Why not head over to Limestone Cafe for some Mushroom Coffee?";
        } else if (hour >= 12 && hour < 17) {
          gameTextTextArea.value = "Good Afternoon. It's a good day for a hike. Why not take the trail into Limestone Canyon?";
        } else if (hour >= 17 && hour < 20) {
          gameTextTextArea.value = "Good Evening. Why not go to Limestone Cafe and watch the sunset?";
        } else {
          gameTextTextArea.value = "Good Night. It's getting dark out there. Watch out for goblins.";
        }
        console.log("Textarea value set to:", gameTextTextArea.value);
      }

      customGreeting();
      setInterval(customGreeting, 60000);
    });

    // Locations
    const locations = [
      {
        name: "Limestone Cafe",
        "button text": ["Drink Coffee", "Go to Canyon", "Go to Town"],
        "button functions": [drinkMushroomCoffee, goToCanyon, goToTown],
        "hazards": [],
        "prizes": [],
        text: "Welcome to Limestone Cafe. Would you like some Mushroom Coffee?",
        locationImage: 'images/limestoneCafe.jpg'
      }
    ];

    // Functions
    function update(location) {
      gameImage.src = location.locationImage;
      button1.innerText = location["button text"][0];
      button2.innerText = location["button text"][1];
      button3.innerText = location["button text"][2];
      button1.onclick = location["button functions"][0];
      button2.onclick = location["button functions"][1];
      button3.onclick = location["button functions"][2];
      gameTextTextArea.value = location.text;
    }

    function drinkMushroomCoffee() {
      energy += 30;
      money -= 10;
      health += 5;
      gameTextTextArea.value = "You drank Mushroom Coffee! Energy +30, Health +5, Money -10.";
      updateStats();
    }

    function goToCanyon() {
      gameTextTextArea.value = "You enter Limestone Canyon.";
    }

    function goToTown() {
      gameTextTextArea.value = "You head to the town.";
    }

    function goToStore() {
      gameTextTextArea.value = "You visit the store.";
    }

    function useTimeMachine() {
      gameTextTextArea.value = "You use the Time Machine!";
    }

    function updateStats() {
      document.getElementById('healthText').textContent = health;
      document.getElementById('xpText').textContent = xp;
      document.getElementById('moneyText').textContent = money;
      document.getElementById('mushroomCoffeeText').textContent = mushroomCoffee;
    }

    // Button event listeners
    button1.addEventListener('click', () => update(locations[0]));
    button2.addEventListener('click', goToCanyon);
    button3.addEventListener('click', goToStore);
    button4.addEventListener('click', useTimeMachine);
    button5.addEventListener('click', useTimeMachine);