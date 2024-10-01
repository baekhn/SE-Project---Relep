document.addEventListener('DOMContentLoaded', () => {
    const chatItems = document.querySelectorAll('.chat-item');
    const chatWindows = document.querySelectorAll('.chat-window');
    const placeholder = document.getElementById('placeholder');

    chatItems.forEach(chatItem => {
        chatItem.addEventListener('click', () => {
            const chatId = chatItem.getAttribute('data-chat');

            // Hide the placeholder
            if (placeholder) {
                placeholder.classList.remove('active');
            }

            // Hide all chat windows
            chatWindows.forEach(chatWindow => {
                chatWindow.classList.remove('active');
            });

            // Show the clicked chat window
            const activeChatWindow = document.getElementById(chatId);
            if (activeChatWindow) {
                activeChatWindow.classList.add('active');
            }
        });
    });
});