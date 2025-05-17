const getInput = document.querySelector("#name-input");
const getOutput = document.querySelector("#name-output");

getInput.addEventListener("input", (event) => {
   const inputValue = getOutput.textContent = event.currentTarget.value.trim();

    getOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
})