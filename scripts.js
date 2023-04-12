let areaEncriptada = document.querySelector('#encriptado');
let textoNormal = document.querySelector('#encriptar');
let imagenEncriptado = document.querySelector('#imagenEncriptado');
let boton = document.querySelector('#btn-copy');




function changeText(){
    let resultado = encriptar(textoNormal.value);
    areaEncriptada.hidden = false;
    imagenEncriptado.hidden = true;
    textoNormal.value = '';
    areaEncriptada.value = resultado;
    boton.hidden = false;
}

function encriptar(valor) {
    let arr = valor.split(' ');
    let newCadena = '';
    for (let i=0; i < arr.length; i++){ 
    newCadena += transformar(arr[i]) + ' ';
    };
    return newCadena.trim();
  }

function desencriptar(){
    areaEncriptada.value = textoNormal.value.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
    textoNormal.value = '';
}
  
  function transformar(palabra){
    let newPalabra = '';
    for(let i=0;i<palabra.length;i++){
      switch(palabra[i]){
        case 'a':newPalabra += 'ai';
          break;
        case 'e':newPalabra += 'enter';
          break;
        case 'i':newPalabra += 'imes';
          break;
        case 'o':newPalabra += 'ober';
          break;
        case 'u':newPalabra += 'ufat';
          break;
        default: newPalabra += palabra[i];
          break;
      }
    }
    return newPalabra;
  }

  const copiar = () =>{
    textoNormal.value = areaEncriptada.value;
    areaEncriptada.value = '';
  }
