function showResponse(response) {
  new Typewriter("#reponse-generator", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAI(response) {
  response.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7cfac3t6d90fo31f4fb0ff0151e8560c";
  let context =
    " You are a professional stylist helper who loves to be innovative and cretaive with your work.Your mission is to create a set of recommendation of Loreal products and hair styles writing it like an html list. Make sure to be precise and detailed with bullet points and show the recommendation complete. Make sure to follow the instructions below and give the complete instructions. Make the h1 a little bit smaller.Please give the information in bullet points. Please! at the end of the recommendation and at the  write a quote and sign with SheCodes AI in bold.";

  let prompt = `User instructions: Generate hair recommendations using Loreal products  ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showResponse);
  let recipe = document.querySelector("#reponse-generator");
  recipe.classList.remove("hidden");
  recipe.innerHTML = `<div class="generating">Generating the best recommendations for your client: ${instructionsInput.value} !</div>`;
  instructionsInput.value = "";
}

function generateReport() {
  alert("Report generated and emailed successfully!");
}

let inputGenerator = document.querySelector("#form-generator");
inputGenerator.addEventListener("submit", generateAI);

let report = document.querySelector("#report");
report.addEventListener("click", generateReport);
