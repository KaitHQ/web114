// Simple Chat App Script | Tomira Jefferson 5/5/25

const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");
const messageInput = document.getElementById("message-input");
const chatArea = document.getElementById("chat-area");

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message === "") return;

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const messageText = document.createElement("p");
    messageText.textContent = message;

    // Create a cool timestamp 
    const timestamp = document.createElement("span");
    const now = new Date();
    timestamp.classList.add("timestamp");
    timestamp.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const removeIcon = document.createElement("span");
    removeIcon.classList.add("material-icons", "remove");
    removeIcon.textContent = "close";

    removeIcon.addEventListener("click", () => {
        chatArea.removeChild(messageDiv);
    });

    messageDiv.appendChild(messageText);
    messageDiv.appendChild(timestamp);
    messageDiv.appendChild(removeIcon);
    chatArea.appendChild(messageDiv);

    messageInput.value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
});

// If the enter button is pressed, instead of the send key, execute this event listener.
messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendButton.click(); // Reuse the existing click handler
    }
});