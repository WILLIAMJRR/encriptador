function EncriptarAndDesencriptar() {
  const input = document.querySelector('.form__input');
  const btnEncriptar = document.querySelector('.btn__encriptar');
  const btnDesencriptar = document.querySelector('.btn_desencriptar');
  const textEncriptado = document.querySelector('.textarea');
  const muneco = document.querySelector('.muneco')
  const text_textarea = document.querySelector('.text_textarea')

  function encriptar() {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(input.value)) {
      alert('El texto solo puede contener caracteres alfabéticos.');
      return '';
    }
  
    const textoEncriptado = input.value
      .toLowerCase()
      .trim()
      .replace(/e/g, 'enter')
      .replace(/o/g, 'ober')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/u/g, 'ufat');
    return textoEncriptado;
  }

  function desencriptar() {
    const textoDesencriptado = textEncriptado.value
      .toLowerCase()
      .trim()
      .replace(/enter/g, 'e')
      .replace(/ober/g, 'o')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ufat/g, 'u');
    return textoDesencriptado;
  }

  function handleClickEncriptar(e) {
    e.preventDefault();
    textEncriptado.innerHTML = encriptar();
    muneco.classList.add('text_textarea__display__none')
    text_textarea.classList.add('text_textarea__display__none')
    input.value = '';
  }

  function handleClickDesencriptar(e) {
    e.preventDefault();
    textEncriptado.innerHTML = desencriptar();
    input.value = '';
  }

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      alert('Precione Click en el boton encriptar');
    }
  }

  input.addEventListener('keydown', handleKeyPress);
  btnEncriptar.addEventListener('click', handleClickEncriptar);
  btnDesencriptar.addEventListener('click', handleClickDesencriptar);
}

document.addEventListener('DOMContentLoaded', EncriptarAndDesencriptar);
