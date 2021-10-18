const btnFormatter = document.getElementById("btnFormatter");
const btnMinify = document.getElementById("btnMinify");
const jsonInput = document.getElementById("largeAreaInput");
const jsonOutput = document.getElementById("largeAreaOutput");

// JSON formatting - prettify/beautify
btnFormatter.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(jsonInput.value), null, 4);
    jsonOutput.value = formatted;
});

// JSON minify
btnMinify.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(jsonInput.value), null, 0);
    jsonOutput.value = formatted;
});