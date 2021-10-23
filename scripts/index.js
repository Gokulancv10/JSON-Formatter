const btnFormatter = document.getElementById("btnFormatter");
const btnMinify = document.getElementById("btnMinify");
const jsonInput = document.getElementById("largeAreaInput");
const jsonOutput = document.getElementById("largeAreaOutput");
const copyToClipBoard = document.getElementById("copyToClipBoard");

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

// Copy to clipboard
copyToClipBoard.addEventListener("click", () => {
    const text = jsonOutput.value;
    if (text.split(" ").join("").length > 1) {
        jsonOutput.select();
        document.execCommand("Copy");
    }
})