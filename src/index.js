// grab name input, welcome link
const nameInput = document.getElementById("name");
const welcomeLink = document.querySelector(".welcome-link");

function setName(name) {
  welcomeLink.innerHTML = `Welcome, ${name}`;

  if (name.length < 1) {
    welcomeLink.innerHTML = "Welcome";
  }
}

// listen for change event on input and set name
nameInput.addEventListener("input", (e) => setName(e.target.value));
