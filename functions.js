// export functions to use in limestone quest js files
// use in other projects

// custom greeting with time 

function updateGreeting() {
  const now = new Date();
  const year = now.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[now.getMonth()];
  const day = now.getDate().toString().padStart(2, '0');
  const hour24 = now.getHours();  // For greeting logic
  const mins = now.getMinutes().toString().padStart(2, '0');
  let hour = hour24;
  const amPm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;  // 12-hour format

  const greeting = (() => {
    switch (true) {
      case (hour24 >= 5 && hour24 < 12):
        return { english: "Good Morning", malayalam: "സുപ്രഭാതം" };
      case (hour24 >= 12 && hour24 < 17):
        return { english: "Good Afternoon", malayalam: "ശുഭാന്തരം" };
      case (hour24 >= 17 && hour24 < 22):
        return { english: "Good Evening", malayalam: "ശുഭ സന്ധ്യ" };
      case (hour24 >= 22 || hour24 < 5):
        return { english: "Good Night", malayalam: "ശുഭരാത്രി" };
      default:
        return { english: "Hello", malayalam: "നമസ്കാരം" };
    }
  })();


  const fullGreetingStr = (minsPadded) => {
    const currentMins = parseInt(minsPadded, 10);
    if (currentMins % 2 === 0) {
      return `${greeting.english}! It is ${year} ${month} ${day} at ${hour}:${minsPadded} ${amPm}.`;
    } else {
      return `${greeting.malayalam}! It is ${year} ${month} ${day} at ${hour}:${minsPadded} ${amPm}.`;
    }
  };

  const fullGreetingText = fullGreetingStr(mins);

  // Update the DOM element
  const greetingTextArea = document.getElementById('greetingTextArea');
  if (greetingTextArea) {
    greetingTextArea.textContent = fullGreetingText;
  }
}

// Initial call
updateGreeting();

// Update every second
setInterval(updateGreeting, 1000);