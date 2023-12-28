function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("instructions-input");
  let apiKey = "331fct734c14fe46300adod3e6c6aacb";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to write a four line poem in basic english.";
  let prompt = `generate a poem about ${instructionInput.value} `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
