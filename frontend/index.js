// // API setup...
// const form = document.getElementById('chat-form');
// const input = document.getElementById('message-input');
// const messagesContainer = document.getElementById('messages');

// const API_KEY = "AIzaSyB1g-qMV4aVr9Fiz_W6WrN1LqvXsPF_fPA";
// const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const msg = input.value.trim();
//       if (!msg) return;

//       // Append user message
//       const userMsgDiv = document.createElement('div');
//       userMsgDiv.className = 'message user-message max-w-xs ml-auto mb-4 p-3 rounded-lg bg-blue-600 text-white';
//       userMsgDiv.textContent = msg;
//       messagesContainer.appendChild(userMsgDiv);

//       input.value = '';
//       messagesContainer.scrollTop = messagesContainer.scrollHeight;

//       // Simulate bot response after delay
//       const loadingDiv = document.createElement('div');
//   loadingDiv.className = 'message bot-message max-w-xs mb-4 p-3 rounded-lg bg-gray-200 text-gray-800 italic';
//   loadingDiv.textContent = 'Thinking...';
//   messagesContainer.appendChild(loadingDiv);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight;

//     });

// // yt...
// const userData = {
//     message:null
// }
// const generateBotRes = async () => {
//     const requestOptions = {
//         method : "POST",
//         headers : {"Content-Type":"application/json"},
//         body : JSON.stringify({
//             contents: [{"parts": [{text:userData.message}]}]
//         })
//     }
//     try{
//         const response = await fetch(API_URL,requestOptions);
//         const data = await response.json();
//         if(!response.ok) throw new Error(data.error.message || "Unknown API error");
//         // console.log(data);
//         const apiResText = data.candidates[0].content.parts[0].text.trim();
//             loadingDiv.remove(); // Remove loading message
//         const botMsgDiv = document.createElement('div');
//     botMsgDiv.className = 'message bot-message max-w-xs mb-4 p-3 rounded-lg bg-gray-200 text-gray-800';
//     botMsgDiv.textContent = apiResText;
//     messagesContainer.appendChild(botMsgDiv);
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;

//     } catch(error){
//         // console.log(error);
//         loadingDiv.remove();
//     const errorMsgDiv = document.createElement('div');
//     errorMsgDiv.className = 'message bot-message max-w-xs mb-4 p-3 rounded-lg bg-red-200 text-red-800';
//     errorMsgDiv.textContent = "Error: " + error.message;
//     messagesContainer.appendChild(errorMsgDiv);
//     }
// }
// mobile responsive navbar...
//    const menuBtn = document.getElementById('menu-btn');
//   const mobileMenu = document.getElementById('mobile-menu');
//   menuBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
//   });
function navOpen() {
  // document.getElementById("main-container").style.marginLeft = "25%";
  // document.getElementById("sidebar").style.width = "25%";
  // document.getElementById("sidebar").style.display = "block";
      document.getElementById('sidebar').classList.remove('hidden');
}
function navClose() {
  // document.getElementById("main-container").style.marginLeft = "0%";
  // document.getElementById("sidebar").style.display = "none";
      document.getElementById('sidebar').classList.add('hidden');

}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

const API_KEY = "AIzaSyB1g-qMV4aVr9Fiz_W6WrN1LqvXsPF_fPA";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;

  // Append user message
  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'message user-message max-w-xs ml-auto mb-4 p-3 rounded-lg bg-[#f0f0ff] border: 1px solid #d0d0e0 text-gray-800';
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

  // Get API response
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        contents: [{ parts: [{ text: msg }] }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Unknown API error");
    }

    const apiResText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "No response from API";

    loadingDiv.remove(); // Remove loading message

    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'message bot-message max-w-fit px-4 py-2 mb-4 p-3 rounded-lg bg-gray-200 text-gray-800';
    botMsgDiv.textContent = apiResText;
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
