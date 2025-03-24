// Sample character data
let characters = [
  { name: "Character 1", image: "assets/character1.gif", votes: 0 },
  { name: "Character 2", image: "assets/character2.gif", votes: 0 },
];

// Function to display characters
function displayCharacters() {
  const characterBar = document.getElementById("character-bar");
  characterBar.innerHTML = ""; // Clear existing characters

  characters.forEach((character, index) => {
    const characterElement = document.createElement("div");
    characterElement.innerText = character.name;
    characterElement.classList.add("character-item");
    characterElement.addEventListener("click", () => selectCharacter(index));
    characterBar.appendChild(characterElement);
  });
}

// Function to select a character
function selectCharacter(index) {
  const character = characters[index];
  document.getElementById("name").innerText = character.name;
  document.getElementById("image").src = character.image;
  document.getElementById("vote-count").innerText = character.votes;
}

// Function to add votes
document.getElementById("votes-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const votes = parseInt(document.getElementById("votes").value);
  const currentCharacter = characters.find(
    (char) => char.name === document.getElementById("name").innerText
  );
  if (currentCharacter) {
    currentCharacter.votes += votes;
    document.getElementById("vote-count").innerText = currentCharacter.votes;
  }
  document.getElementById("votes").value = ""; // Clear input
});

// Function to reset votes
document.getElementById("reset-btn").addEventListener("click", () => {
  const currentCharacter = characters.find(
    (char) => char.name === document.getElementById("name").innerText
  );
  if (currentCharacter) {
    currentCharacter.votes = 0;
    document.getElementById("vote-count").innerText = currentCharacter.votes;
  }
});

// Function to add a new character
document.getElementById("character-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = document.getElementById("new-name").value;
  const newImageUrl = document.getElementById("image-url").value;
  characters.push({ name: newName, image: newImageUrl, votes: 0 });
  displayCharacters();
  document.getElementById("character-form").reset(); // Clear form
});

// Initial display of characters
displayCharacters();
