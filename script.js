const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matrizCodigo=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value)

    mensaje.value = textoEncriptado;
    textArea.value=""

}
    function btnDesencriptar(){
const textoDesencriptado = desencriptar(textArea.value)
mensaje.value=textoDesencriptado
textArea.value =""

}

function encriptar(stringEncriptado){
    stringEncriptado=stringEncriptado.tolowerCase()
    for(let i=0 ; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

return stringEncriptado;

}

function desencriptar(stringDesencriptado){

    stringDesencriptado= stringDesencriptado.tolowerCase()
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        } 
    }

    return stringDesencriptado;
}
    function btnCopiar(){
const textCopiado = mensaje.value;
navigator.clipboard.writeText(textCopiado);
    }  


