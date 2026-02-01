const clientIo = io();
const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

clientIo.on('connect', () => {
    logEvent(`Connected to server with ID: ${clientIo.id}`);
    document.getElementById('client-id').textContent = clientIo.id;
});



const sendPing = () => {
    logEvent(`Ping button clicked`);

    const Message = "Hello from Client!";
    clientIo.emit('ping', Message);
    logEvent("ON client - PING sent, waiting for PONG...");
};

clientIo.on('pong', (data) => {
    logEvent(`Received from server: ${data}`);
});







const sendChatMessage = () => {
    logEvent('Chat button clicked');
};

const sendFeedback = () =>{
    const category = document.getElementById('feedback-category').value;
    const userInput = document.getElementById('feedback-message').value;

    logEvent('Feedback button clicked');
};
