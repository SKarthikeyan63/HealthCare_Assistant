function startSpeechRecognition() {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = navigator.language || "en-US";

  recognition.start();

  recognition.onresult = (event) => {
    let text = event.results[0][0].transcript;
    document.getElementById("user-input").value = text;
    sendMessage();
  };
}

function speakText(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = navigator.language || "en-US";
  synth.speak(utterance);
}
