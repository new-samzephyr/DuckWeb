// Encoded directory map
const directoryMap = {
    "MTIzNDU=": "notimetothink",
    "Njc4OTA=": "anotherdirectory",
    "YWJjZGU=": "yetanotherdirectory"
};

// Base64 decoding function
function decodeBase64(str) {
    return atob(str);
}

function checkInput() {
    const userInput = document.getElementById('userInput').value;
    const message = document.getElementById('message');

    const encodedInput = btoa(userInput);

    if (directoryMap[encodedInput]) {
        window.location.href = directoryMap[encodedInput] + '.html';
    } else {
        message.textContent = "Directory not found";
    }
}

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkInput();
    }
});
