const textToConvert = document.getElementById("text-to-convert");
const convertButton = document.getElementById("convert-button");
const audio = document.getElementById("audio");

convertButton.addEventListener("click", () => {
  const text = textToConvert.value; 
  convertTextToSpeech(text);
});

function convertTextToSpeech(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.lang = "pt-BR"; 
  speechSynthesis.speak(speech);
}
