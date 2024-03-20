const campoDigitar = document.querySelector('.campo__digitar input');
const resultado = document.querySelector('.area__criptografada__borda h2');
const btnCopiar = document.querySelector('#botaocopiartexto');

window.addEventListener("load", function() {     
    btnCopiar.style.display = 'none';   
});

function btnEncriptar() { 
    const textoEncriptado = encriptar(campoDigitar.value);
    resultado.textContent = textoEncriptado;
    ocultarMensagem();
    mostrarCopiar();
}

function ocultarMensagem() {
    const mensagemNaoEncontrada = document.querySelector('.area__criptografada__borda h3');
    mensagemNaoEncontrada.style.display = 'none';
}

function mostrarCopiar() {
    btnCopiar.style.display = 'block';
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();       
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]    

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = descriptar(campoDigitar.value);
    resultado.textContent = textoDesencriptado;
    ocultarMensagem();
    mostrarCopiar();
}

function descriptar(stringDescriptada) {
    stringDescriptada = stringDescriptada.toLowerCase();       
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']]

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDescriptada;
}

function copiarTexto() {
    const textoCopiar = resultado.textContent;
    navigator.clipboard.writeText(textoCopiar);
    alert("Texto copiado para a área de transferência com sucesso :)");
}

