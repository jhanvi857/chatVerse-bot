function navOpen() {
  document.getElementById('sidebar').classList.remove('hidden');
}

function navClose() {
  document.getElementById('sidebar').classList.add('hidden');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

// ✅ Backend route
const API_URL = "http://localhost:8000/api/chat"; 

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;

  // Append user message
  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'message user-message max-w-xs ml-auto mb-4 p-3 rounded-lg bg-[#f0f0ff] border text-gray-800';
  userMsgDiv.textContent = msg;
  messagesContainer.appendChild(userMsgDiv);

  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Append loading bot message
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'message bot-message max-w-xs mb-4 p-3 rounded-lg bg-gray-200 text-gray-800 italic';
  loadingDiv.textContent = 'Thinking...';
  messagesContainer.appendChild(loadingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Call backend API
  try {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await response.json();
  loadingDiv.remove();

  if (data.error) {
    const errorMsg = typeof data.error === 'string' 
      ? data.error 
      : (data.error.message || JSON.stringify(data.error));
    throw new Error(errorMsg);
  }

  const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "No response";

  const botMsgDiv = document.createElement('div');
  botMsgDiv.className = 'message bot-message max-w-fit px-4 py-2 mb-4 p-3 rounded-lg bg-gray-200 text-gray-800';
  botMsgDiv.textContent = botReply;
  messagesContainer.appendChild(botMsgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

} catch (error) {
  loadingDiv.remove();
  const errorMsgDiv = document.createElement('div');
  errorMsgDiv.className = 'message bot-message max-w-xs mb-4 p-3 rounded-lg bg-red-200 text-red-800';
  errorMsgDiv.textContent = "Error: " + error.message;
  messagesContainer.appendChild(errorMsgDiv);
}
});
