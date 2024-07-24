async function loadDirectoryMap() {
    try {
        const response = await fetch('directorymap.txt');
        const text = await response.text();
        const lines = text.trim().split('\n');
        const map = {};

        lines.forEach(line => {
            const [key, value] = line.split('=');
            map[key] = value;
        });

        return map;
    } catch (error) {
        console.error('Error loading directory map:', error);
        return {};
    }
}

async function checkInput() {
    const map = await loadDirectoryMap();
    const userInput = document.getElementById('userInput').value;
    const message = document.getElementById('message');
    const encodedInput = btoa(userInput);

    if (map[encodedInput]) {
        window.location.href = map[encodedInput] + '.html';
    } else {
        message.textContent = "Directory not found";
    }
}

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkInput();
    }
});
