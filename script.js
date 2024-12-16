function toggleProgram(header) {
    const content = header.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        header.querySelector('.arrow').textContent = '▶';
    } else {
        content.style.display = "block"; 
        header.querySelector('.arrow').textContent = '▼';
    }
}

function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).catch(err => {
        console.error('Error copying text: ', err);
    });
}
function hideContent() {
    const programs = document.querySelectorAll('.program');
    const hideButton = document.getElementById('hideButton');
    const header = document.querySelector('h1');

    if (header) {
        header.remove();
    }

    programs.forEach(program => {
        program.remove();
    });

    hideButton.disabled = true;
    hideButton.style.pointerEvents = 'none';
    hideButton.style.opacity = '0.0';

    const img = document.createElement('img');
    img.src = './Images/arduinoide2.png';
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.objectFit = 'cover';
    img.style.zIndex = '9999';
    document.body.appendChild(img);
}
