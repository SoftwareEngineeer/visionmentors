// chat.js

// When the chat icon is clicked, display the chatbox
document.getElementById('chatIcon').addEventListener('click', function () {
    document.getElementById('chatBox').style.display = 'block';
});

// When the close button in the chatbox is clicked, hide the chatbox
document.getElementById('closeChat').addEventListener('click', function () {
    document.getElementById('chatBox').style.display = 'none';
});
