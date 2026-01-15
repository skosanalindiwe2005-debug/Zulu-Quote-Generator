function displayQuote(response) {
  new Typewriter(`#quote`, {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector(".search-form-input");

  let poem = document.querySelector(".quote");
  poem.innerHTML = `<span class="generating"> ⏳ Generating a Zulu quote about ${searchInputElement.value}</span>`;

  let apiKey = "a15t332fa59f4b3b71db27ddcdod075f";
  let prompt = `User instructions: Generate a Zulu quote about ${searchInputElement.value}`;
  let context = `You are an AI model with lots of knowledge about quotes and you love to write about short life quotes. Your mission is to always generate one quote. Don't do more than one quote and don.t translate the quote to English. Make sure to follow the instructions. Sign with "Lindiwe's AI" in a <strong> and <em> elements at the end(bottom) of the quote. Please behave!`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#quote");
  poemElement.style.display = "block";

  axios.get(apiUrl).then(displayQuote);
}

let formElement = document.querySelector(".search-form");
formElement.addEventListener("submit", generateQuote);
