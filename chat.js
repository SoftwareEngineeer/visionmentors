// chat.js

// When the chat icon is clicked, display the chatbox
// Chatbox toggle
document.getElementById("chatIcon").addEventListener("click", function () {
    document.getElementById("chatBox").style.display = "block";
});

document.getElementById("closeChat").addEventListener("click", function () {
    document.getElementById("chatBox").style.display = "none";
});

