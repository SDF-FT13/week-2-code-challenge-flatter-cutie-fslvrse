document.addEventListener("DOMContentLoaded", () => {
  const characterBar = document.getElementById("character-bar");
  const nameDisplay = document.getElementById("name");
  const imageDisplay = document.getElementById("image");
  const voteCount = document.getElementById("vote-count");
  const voteForm = document.getElementById("votes-form");
  const voteInput = document.getElementById("votes");
  const resetBtn = document.getElementById("reset-btn");
  const characterForm = document.getElementById("character-form");
  const newNameInput = document.getElementById("new-name");
  const imageUrlInput = document.getElementById("image-url");

  // Initial characters (mock data if you don't have JSON server)
  let characters = [
    {
      id: 1,
      name: "Naruto",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_Uzumaki.png",
      votes: 5,
    },
    {
      id: 2,
      name: "Sasuke",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/79/SasukeUchihaPartII.png",
      votes: 2,
    },
  ];

  let currentCharacter = null;

  // Load characters into character bar
  function loadCharacters() {
    characterBar.innerHTML = ""; // Clear previous characters
    characters.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char.name;
      span.addEventListener("click", () => displayCharacter(char));
      characterBar.appendChild(span);
    });
  }

  // Show selected character in main display
  function displayCharacter(character) {
    currentCharacter = character;
    nameDisplay.textContent = character.name;
    imageDisplay.src = character.image;
    voteCount.textContent = character.votes;
  }

  // Handle vote form submission
  voteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentCharacter) return;

    const newVotes = parseInt(voteInput.value);
    if (!isNaN(newVotes)) {
      currentCharacter.votes += newVotes;
      voteCount.textContent = currentCharacter.votes;
      voteForm.reset();
    }
  });

  // Handle reset votes
  resetBtn.addEventListener("click", () => {
    if (!currentCharacter) return;

    currentCharacter.votes = 0;
    voteCount.textContent = 0;
  });

  // Handle adding new character
  characterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newName = newNameInput.value.trim();
    const newImage = imageUrlInput.value.trim();

    if (newName && newImage) {
      const newCharacter = {
        id: characters.length + 1,
        name: newName,
        image: newImage,
        votes: 0,
      };

      characters.push(newCharacter);
      loadCharacters(); // Re-render the character bar
      characterForm.reset();
    }
  });

  // Load everything on page start
  loadCharacters();
});
