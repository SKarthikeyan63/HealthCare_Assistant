async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  let message = inputField.value.trim();

  if (message === "") return;

  chatBox.innerHTML += `<div class="message user-message">👤${message}</div>`;
  inputField.value = "";

  const response = await fetch("/send_message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();

  data.forEach((msg) => {
    chatBox.innerHTML += `<div class="message bot-message">🤖${msg.text}</div>`;
    speakText(msg.text);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}
