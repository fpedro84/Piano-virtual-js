// Seleciona todas as teclas do piano
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Seleciona o controle deslizante de volume
const volumeSlider = document.querySelector(".volume-slider input");

// Seleciona o checkbox para mostrar/ocultar as teclas
const keysCheck = document.querySelector(".keys-check input");

// Array para mapear as teclas do piano
let mappedKeys = [];

const pianokeys = document.querySelectorAll(".piano-keys .key");

// Variavel responsavel pelo audio
let audio = new Audio("src/tunes/a.wav");

// Atribuição do audio para cada nota do teclado virtual
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    // parte do codigo que atribui o efeito de clique ao acionar pelas letras
    const clikedKey = document.querySelector(`[data-key=${key}`);
    clikedKey.classList.add("active");
    setTimeout(() =>{
        clikedKey.classList.remove("active");
    },150);

};

// Capturando o audio pelo clique do mouse
pianokeys.forEach((key) =>{
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key); // Mapeia as teclas no array
});

// Captunando o audio pelas letras no teclado

document.addEventListener("keydown", (e) => {
    if (mappedKeys.includes(e.key)){
    playTune(e.key);
    }
});

// Função para ajustar o volume do áudio
const handleVolume = (e) => {
    audio.volume = e.target.value; // Define o volume com base no valor do controle deslizante
  }
  
// Função para mostrar ou ocultar as teclas do piano
const showHideKeys = () => {
    pianoKeys.forEach(key => {
      key.classList.toggle("hide"); // Adiciona ou remove a classe "hide" para alternar visibilidade
    });
}
  
// Adiciona evento para o controle deslizante de volume
volumeSlider.addEventListener("input", handleVolume);
  
// Adiciona evento ao checkbox para mostrar/ocultar as teclas
keysCheck.addEventListener("click", showHideKeys);

