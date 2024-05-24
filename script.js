


function encriptarTexto() {
    const inputText = document.getElementById('input-area').value;
    const cleanText = inputText.toLowerCase().replace(/[^a-z ]/g, '');

    if (cleanText === inputText) {
        const encryptedText = cleanText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        document.getElementById('output-text').textContent = encryptedText;
    } else {
        document.getElementById('output-text').textContent = '¡ERROR!, Solo se permiten letras minúsculas.';
    }
}



function desencriptarTexto() {
    const inputText = document.getElementById('input-area').value;
    const cleanText = inputText.toLowerCase().replace(/[^a-z ]/g, ''); 

    if (cleanText === inputText) {
        const decryptedText = cleanText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        document.getElementById('output-text').textContent = decryptedText;
        document.getElementById('output-text').style.color = 'black'; 
    } else {
        document.getElementById('output-text').textContent = '¡ERROR!, Solo se permiten letras minúsculas.';
    }
}


function copiarTexto() {
    const inputArea = document.getElementById("input-area");
    inputArea.select();
    document.execCommand("copy");
}

function copiarTextoOutput() {
    const outputText = document.getElementById("output-text").textContent;
    const tempInput = document.createElement("input");
    tempInput.value = outputText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}


