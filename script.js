const actions = [
    "stumbled upon a secret portal to a magical land",
    "accidentally turned into a giant marshmallow",
    "won a dance battle against a funky chicken",
    "invented a machine that rains pizzas",
    "found a talking cat that loves karaoke"
  ];
  
  const places = [
    "in a mysterious jungle full of singing monkeys",
    "on a floating island made of cotton candy",
    "inside a haunted library where books tell jokes",
    "at a secret donut planet far away in space",
    "in a town where everyone rides invisible unicorns"
  ];
  
  const twists = [
    "Suddenly, it started raining jellybeans!",
    "Out of nowhere, a rainbow-colored dragon appeared and sneezed glitter.",
    "Then, a friendly alien joined and brought chocolate planets.",
    "Unexpectedly, they all started breakdancing together.",
    "And guess what? It was all just a wild dream... or was it?"
  ];
  
  function generateStory() {
    const name = document.getElementById("nameInput").value.trim();
  
    if (name === "") {
      document.getElementById("story").textContent = "Please enter your name!";
      return;
    }
  
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    const randomTwist = twists[Math.floor(Math.random() * twists.length)];
  
    const story = `
      One fine day, <strong>${name}</strong> ${randomAction}. 
      This all happened ${randomPlace}. 
      ${randomTwist}
      In the end, <strong>${name}</strong> laughed so hard that their cheeks hurt and promised to come back for another silly adventure!
    `;
  
    document.getElementById("story").innerHTML = story;
  }
  